import { Condition } from '../index';

export enum AlgorithmHashCondition {
  IsAlgorithmHash = Condition.IsAlgorithmHash,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum SemanticVersionCondition {
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsSemanticVersion = Condition.IsSemanticVersion,
  IsString = Condition.IsString,
}

export enum UUIDCondition {
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
  IsUUID = Condition.IsUUID,
}

export enum MD5Condition {
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsMD5 = Condition.IsMD5,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}
