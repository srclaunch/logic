import { Condition } from '../index';

export enum CreditCardCondition {
  IsCreditCard = Condition.IsCreditCard,
  IsEqual = Condition.IsEqual,
  IsLengthEqual = Condition.IsLengthEqual,
  IsLengthGreaterThan = Condition.IsLengthGreaterThan,
  IsLengthGreaterThanOrEqual = Condition.IsLengthGreaterThanOrEqual,
  IsLengthLessThan = Condition.IsLengthLessThan,
  IsLengthLessThanOrEqual = Condition.IsLengthLessThanOrEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsRegexMatch = Condition.IsRegexMatch,
  IsNotRegexMatch = Condition.IsNotRegexMatch,
}

export enum EmailAddressCondition {
  isEmailAddress = Condition.IsEmailAddress,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsLengthEqual = Condition.IsLengthEqual,
  IsLengthGreaterThan = Condition.IsLengthGreaterThan,
  IsLengthGreaterThanOrEqual = Condition.IsLengthGreaterThanOrEqual,
  IsLengthLessThan = Condition.IsLengthLessThan,
  IsLengthLessThanOrEqual = Condition.IsLengthLessThanOrEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsRegexMatch = Condition.IsRegexMatch,
  IsNotRegexMatch = Condition.IsNotRegexMatch,
}

export enum LicensePlateNumber {
  IsLicensePlateNumber = Condition.IsLicensePlateNumber,
  IsNotNull = Condition.IsNotNull,
  IsNotRegexMatch = Condition.IsNotRegexMatch,
  IsString = Condition.IsString,
  IsRegexMatch = Condition.IsRegexMatch,
}
export enum PassportNumberCondition {
  IsNotNull = Condition.IsNotNull,
  IsPassportNumber = Condition.IsPassportNumber,
  IsString = Condition.IsString,
  IsRegexMatch = Condition.IsRegexMatch,
}

export enum PasswordCondition {
  IsComplexEnough = Condition.IsComplexEnough,
  IsInList = Condition.IsInList,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsNotRegexMatch = Condition.IsNotRegexMatch,
  IsLengthGreaterThan = Condition.IsLengthGreaterThan,
  IsLengthGreaterThanOrEqual = Condition.IsLengthGreaterThanOrEqual,
  IsLengthLessThan = Condition.IsLengthLessThan,
  IsLengthLessThanOrEqual = Condition.IsLengthLessThanOrEqual,
  IsStrongPassword = Condition.IsStrongPassword,
  IsString = Condition.IsString,
  IsRegexMatch = Condition.IsRegexMatch,
}

export enum PhoneNumberCondition {
  IsNotNull = Condition.IsNotNull,
  IsNotRegexMatch = Condition.IsNotRegexMatch,
  IsNumber = Condition.IsNumber,
  IsPhoneNumber = Condition.IsPhoneNumber,
  IsRegexMatch = Condition.IsRegexMatch,
}

export enum SocialSecurityNumberCondition {
  IsNotNull = Condition.IsNotNull,
  IsSSN = Condition.IsSSN,
  IsString = Condition.IsString,
  IsRegexMatch = Condition.IsRegexMatch,
}
