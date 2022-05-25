import { Condition } from '../index';

/**
 * Bank Identification Code
 *
 * @remarks
 * BIC means Bank Identification Code, or Bank Identifier Code.
 * It is an 8 to 11-character code that is used to identify a
 * specific bank when you make an international transaction.
 * */
export enum BICCondition {
  Contains = Condition.Contains,
  IsBIC = Condition.IsBIC,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * European Article Number
 *
 * @remarks
 * The International Article Number (also known as European
 * Article Number or EAN) is a standard describing a barcode
 * symbology and numbering system used in global trade to identify
 * a specific retail product type, in a specific packaging
 * configuration, from a specific manufacturer.
 *
 * The most commonly used EAN standard is the thirteen-digit EAN-13
 * */
export enum EANCondition {
  Contains = Condition.Contains,
  IsEAN = Condition.IsEAN,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * Employer Identification Number
 *
 * @remarks
 *
 * The Employer Identification Number (EIN), also known as the Federal
 * Employer Identification Number (FEIN) or the Federal Tax Identification
 * Number, is a unique nine-digit number assigned by the Internal Revenue
 * Service (IRS) to business entities operating in the United States for the
 * purposes of identification.
 */
export enum EINCondition {
  Contains = Condition.Contains,
  IsEIN = Condition.IsEIN,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * International Bank Account Number
 *
 * @remarks
 *
 * An IBAN, or international bank account number, is a standard
 * international numbering system developed to identify an overseas
 * bank account. The number starts with a two-digit country code, then
 * two numbers, followed by several more alphanumeric characters.
 */
export enum IBANCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsIBAN = Condition.IsIBAN,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * International Standard Book Number
 *
 * @remarks
 *
 * ISBN is the acronym for International Standard Book Number. This
 * 10 or 13-digit number identifies a specific book, an edition of a
 * book, or a book-like product (such as an audiobook). Since 1970 each
 * published book has a unique ISBN. In 2007, assigned ISBNs changed
 * from 10 digits to 13.
 */
export enum ISBNCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsISBN = Condition.IsISBN,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * International Securities Identification Number
 *
 * @remarks
 * An ISIN is a 12-digit alphanumeric code that uniquely identifies a
 * specific security. The numbers are allocated by a country's respective
 * national numbering agency (NNA). An ISIN is not the same as the ticker
 * symbol, which identifies the stock at the exchange level.
 */
export enum ISINCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsISIN = Condition.IsISIN,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * International Standard Music Number
 *
 * @remarks
 * The International Standard Music Number or ISMN (ISO 10957) is a
 * thirteen-character alphanumeric identifier for printed music developed
 * by ISO.
 */
export enum ISMNCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsISMN = Condition.IsISMN,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * International Standard Serial Number
 *
 * @remarks
 * An International Standard Serial Number (ISSN) is an eight-digit
 * serial number used to uniquely identify a serial publication,
 * such as a magazine. The ISSN is especially helpful in distinguishing
 * between serials with the same title.
 */
export enum ISSNCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsISSN = Condition.IsISSN,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
}

/**
 * Tax Identification Number
 *
 * @remarks
 * A Tax Identification Number (TIN) is a nine-digit number used as a
 * tracking number by the Internal Revenue Service (IRS)
 */
export enum TaxIDNumberCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
  IsTaxIDNumber = Condition.IsTaxIDNumber,
}

/**
 * Value Added Tax (VAT) Registration Number
 *
 * @remarks
 * A VAT registration number is a nine-digit number used to identify
 * a business or person in the European Union.
 */
export enum VATCondition {
  Contains = Condition.Contains,
  IsEqual = Condition.IsEqual,
  IsInList = Condition.IsInList,
  IsNotEqual = Condition.IsNotEqual,
  IsNotInList = Condition.IsNotInList,
  IsNotNull = Condition.IsNotNull,
  IsString = Condition.IsString,
  IsVATIDNumber = Condition.IsVATIDNumber,
}
