import { Condition } from "../../index";

export enum CityCondition {
  IsAlpha = Condition.IsAlpha,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum CountryCondition {
  IsAlpha = Condition.IsAlpha,
  IsCountry = Condition.IsCountry,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

export enum LatitudeCondition {
  IsEqual = Condition.IsEqual,
  IsFloat = Condition.IsFloat,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsNumeric = Condition.IsNumeric,
}

export enum LongitudeCondition {
  IsEqual = Condition.IsEqual,
  IsFloat = Condition.IsFloat,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsNumeric = Condition.IsNumeric,
}

export enum PostalCodeCondition {
  IsEqual = Condition.IsEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsPostalCode = Condition.IsPostalCode,
  IsNotNull = Condition.IsNotNull,
}

export enum ProvinceCondition {
  IsAlpha = Condition.IsAlpha,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsProvince = Condition.IsProvince,
  IsString = Condition.IsString,
}

export enum StateCondition {
  IsAlpha = Condition.IsAlpha,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsState = Condition.IsState,
  IsString = Condition.IsString,
}

export enum StreetAddressCondition {
  IsAlphanumeric = Condition.IsAlphanumeric,
  IsEqual = Condition.IsEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,

  IsString = Condition.IsString,
  IsStreetAddress = Condition.IsStreetAddress,
}
