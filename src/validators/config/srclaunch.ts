import { Project } from '@srclaunch/types';
import { Condition } from '../../conditions/index';
import { getValidationProblemLabel } from '../../validators/problem';

const validateSrcLaunchConfig = (config: Project) => {
  let problems = [];
  if (!config) {
    problems = [...problems, getValidationProblemLabel(Condition.IsRequired)];
  }

  if (!config.name) {
    problems = [
      ...problems,
      getValidationProblemLabel(Condition.IsRequired, {
        subject: 'name',
      }),
    ];
  }

  if (!config.description) {
    problems = [
      ...problems,
      getValidationProblemLabel(Condition.IsRequired, {
        subject: 'name',
      }),
    ];
  }

  if (!config.type) {
    problems = [
      ...problems,
      getValidationProblemLabel(Condition.IsRequired, {
        subject: 'name',
      }),
    ];
  }

  // TODO: Add more checks here

  return problems;
};
