import { Condition } from "../../index";

export enum CurrencyCondition {
  IsBetween = Condition.IsBetween,
  IsCurrency = Condition.IsCurrency,
  IsDecimal = Condition.IsDecimal,
  IsDivisibleBy = Condition.IsDivisibleBy,
  IsEvenNumber = Condition.IsEvenNumber,
  IsFloat = Condition.IsFloat,
  IsGreaterThan = Condition.IsGreaterThan,
  IsGreaterThanOrEqual = Condition.IsGreaterThanOrEqual,
  IsInteger = Condition.IsInteger,
  IsISO8601 = Condition.IsISO8601,
  IsLessThan = Condition.IsLessThan,
  IsLessThanOrEqual = Condition.IsLessThanOrEqual,
  IsNegativeNumber = Condition.IsNegativeNumber,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
  IsNumber = Condition.IsNumber,
  IsOddNumber = Condition.IsOddNumber,
  IsPositiveNumber = Condition.IsPositiveNumber,
}

export enum BitcoinAddressCondition {
  IsBitcoinAddress = Condition.IsBitcoinAddress,
  IsEqual = Condition.IsEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
}

export enum EthereumAddressCondition {
  IsEthereumAddress = Condition.IsEthereumAddress,
  IsEqual = Condition.IsEqual,
  IsNotEqual = Condition.IsNotEqual,
  IsNotNull = Condition.IsNotNull,
}
