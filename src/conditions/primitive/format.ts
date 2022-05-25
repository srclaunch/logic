import { Condition } from '../index';

export enum HexadecimalCondition {
  IsEqual = Condition.IsEqual,
  IsHexadecimal = Condition.IsHexadecimal,
  IsLengthEqual = Condition.IsLengthEqual,
  IsLengthGreaterThan = Condition.IsLengthGreaterThan,
  IsLengthGreaterThanOrEqual = Condition.IsLengthGreaterThanOrEqual,
  IsLengthLessThan = Condition.IsLengthLessThan,
  IsLengthLessThanOrEqual = Condition.IsLengthLessThanOrEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum JSONCondition {
  IsEqual = Condition.IsEqual,
  IsJSON = Condition.IsJSON,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
}

export enum MarkdownCondition {
  IsEqual = Condition.IsEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsMarkdown = Condition.IsMarkdown,
  IsString = Condition.IsString,
}
