import { Condition } from '../index';

export enum DataURICondition {
  Contains = Condition.Contains,
  IsDataURI = Condition.IsDataURI,
  IsEqual = Condition.IsEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum DomainNameCondition {
  Contains = Condition.Contains,
  IsDomainName = Condition.IsDomainName,
  IsEqual = Condition.IsEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum EmailCondition {
  Contains = Condition.Contains,
  IsEmailAddress = Condition.IsEmailAddress,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum IPAddressCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsIPAddress = Condition.IsIPAddress,
  IsInIPAddressRange = Condition.IsInIPAddressRange,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotInIPAddressRange = Condition.IsNotInIPAddressRange,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum IPAddressRangeCondition {
  IsEqual = Condition.IsEqual,
  IsIPAddressRange = Condition.IsIPAddressRange,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotInIPAddressRange = Condition.IsNotInIPAddressRange,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum PortCondition {
  IsEqual = Condition.IsEqual,
  IsGreaterThan = Condition.IsGreaterThan,
  IsGreaterThanOrEqual = Condition.IsGreaterThanOrEqual,
  IsInteger = Condition.IsInteger,
  IsLessThan = Condition.IsLessThan,
  IsLessThanOrEqual = Condition.IsLessThanOrEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
}

export enum MACAddressCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsMACAddress = Condition.IsMACAddress,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum MagnetURICondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsMagnetURI = Condition.IsMagnetURI,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum MimeTypeCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsMimeType = Condition.IsMimeType,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum SlugCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
  IsSlug = Condition.IsSlug,
}

export enum URLCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
  IsURL = Condition.IsURL,
}
