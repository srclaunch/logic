import { getValidationProblemLabel } from './problem';
import emailValidator from 'email-validator';
import passwordValidator from 'password-validator';
import { Condition } from '../conditions/index';
import { ValidationProblem } from '../types/validators/problem';

export const validate = (
  value: unknown,
  conditions: {
    [key in Condition]?: boolean | string | number;
  }[],
): ValidationProblem[] => {
  const problems = [...Object.entries(conditions)]
    .map(([conditionName, condition]) => {
      console.log('conditionName', conditionName);
      console.log('condition', condition);
      const conditionValue = conditions[conditionName];

      switch (conditionName) {
        case Condition.IsRequired:
          if (typeof condition?.['is-required'] !== 'boolean') {
            throw new TypeError(
              `Configuration property "IsRequired" must be a boolean.`,
            );
          }

          if (condition?.['is-required'] === true && (!value || value === '')) {
            return getValidationProblemLabel(conditionName);
          }

          break;
        case Condition.HasLetterCount:
          {
            if (
              (Number.isNaN(conditionValue) ||
                !Number.isInteger(conditionValue)) &&
              typeof conditionValue !== 'boolean'
            ) {
              throw new TypeError(
                `Configuration property "HasLetterCount" must be a number or boolean`,
              );
            }

            const schema = new passwordValidator();

            if (conditionValue === 0 || conditionValue === false) {
              schema.has().not().letters();
            } else {
              schema.has().letters(conditionValue['has-letter-count']);
            }

            if (!value || typeof value !== 'string' || !schema.validate(value))
              return getValidationProblemLabel(conditionName, {
                requirement: conditionValue,
              });
          }
          break;
        case Condition.HasLowercaseCount:
          {
            if (
              Number.isNaN(conditionValue) ||
              !Number.isInteger(conditionValue) ||
              typeof conditionValue !== 'number'
            ) {
              throw new TypeError(
                `Configuration property "HasLowercaseCount" must be a number or boolean`,
              );
            }

            const schema = new passwordValidator();

            if (conditionValue === 0) {
              schema.has().not().lowercase();
            } else {
              schema.has().lowercase(conditionValue);
            }

            if (!value || typeof value !== 'string' || !schema.validate(value))
              return getValidationProblemLabel(conditionName, {
                requirement: conditionValue,
              });
          }
          break;
        case Condition.HasNumberCount:
          {
            if (
              Number.isNaN(conditionValue) ||
              !Number.isInteger(conditionValue) ||
              typeof conditionValue !== 'number'
            ) {
              throw new TypeError(
                `Configuration property "HasNumberCount" must be a number or boolean`,
              );
            }

            const schema = new passwordValidator();

            if (conditionValue === 0) {
              schema.has().not().digits();
            } else {
              schema.has().digits(conditionValue);
            }

            if (!value || typeof value !== 'string' || !schema.validate(value))
              return getValidationProblemLabel(conditionName, {
                requirement: conditionValue,
              });
          }
          break;
        case Condition.HasSymbolCount:
          {
            if (
              Number.isNaN(conditionValue) ||
              !Number.isInteger(conditionValue) ||
              typeof conditionValue !== 'number'
            ) {
              throw new TypeError(
                `Configuration property "HasSymbolCount" must be a number`,
              );
            }

            const schema = new passwordValidator();

            if (conditionValue === 0) {
              schema.has().not().symbols();
            } else {
              schema.has().symbols(conditionValue);
            }

            if (!value || typeof value !== 'string' || !schema.validate(value))
              return getValidationProblemLabel(conditionName, {
                requirement: conditionValue,
              });
          }
          break;
        case Condition.HasUppercaseCount:
          {
            if (
              Number.isNaN(conditionValue) ||
              !Number.isInteger(conditionValue) ||
              typeof conditionValue !== 'number'
            ) {
              throw new TypeError(
                `Configuration property "HasUppercaseCount" must be a number`,
              );
            }

            const schema = new passwordValidator();

            if (conditionValue === 0) {
              schema.has().not().uppercase();
            } else {
              schema.has().uppercase(conditionValue);
            }

            if (!value || typeof value !== 'string' || !schema.validate(value))
              return getValidationProblemLabel(conditionName, {
                requirement: conditionValue,
              });
          }
          break;
        case Condition.IsEmailAddress:
          if (typeof conditionValue !== 'boolean') {
            throw new TypeError(
              `Configuration property "IsEmailAddress" must be a boolean.`,
            );
          }

          if (typeof value !== 'string') {
            return getValidationProblemLabel(conditionName);
          }

          if (!emailValidator.validate(value)) {
            return getValidationProblemLabel(conditionName);
          }

          break;
        case Condition.IsEqual:
          if (value !== conditionValue) {
            return getValidationProblemLabel(conditionName);
          }

          break;
        case Condition.IsNotNull:
          if (typeof conditionValue !== 'boolean') {
            throw new TypeError(
              `Configuration property "IsNotNull" must be a boolean.`,
            );
          }

          if (value === null) {
            return getValidationProblemLabel(conditionName);
          }

          break;
        case Condition.IsLengthEqual:
          if (
            Number.isNaN(conditionValue) ||
            !Number.isInteger(conditionValue)
          ) {
            throw new TypeError(
              `Configuration property "IsLengthEqual" must be a number.`,
            );
          }

          if (
            (typeof value === 'string' || typeof value === 'number') &&
            value.toString().length !== conditionValue
          ) {
            return getValidationProblemLabel(conditionName, {
              requirement: conditionValue,
            });
          }

          break;
        case Condition.IsLengthGreaterThanOrEqual:
          if (
            !conditionValue ||
            Number.isNaN(conditionValue) ||
            !Number.isInteger(conditionValue)
          ) {
            throw new TypeError(
              `Configuration property "IsLengthGreaterThanOrEqual" must be a number.`,
            );
          }

          if (typeof value !== 'string' || value.length < conditionValue) {
            return getValidationProblemLabel(conditionName, {
              requirement: conditionValue,
            });
          }

          break;
        case Condition.IsLengthLessThanOrEqual:
          if (
            !conditionValue ||
            Number.isNaN(conditionValue) ||
            !Number.isInteger(conditionValue)
          ) {
            throw new TypeError(
              `Configuration property "IsLengthLessThanOrEqual" must be a number.`,
            );
          }

          if (typeof value !== 'string' || value.length > conditionValue) {
            return getValidationProblemLabel(conditionName, {
              requirement: conditionValue,
            });
          }

          break;
      }
    })
    .filter(prop => {
      if (!prop) return false;

      return true;
    }) as ValidationProblem[];

  return problems;
};
