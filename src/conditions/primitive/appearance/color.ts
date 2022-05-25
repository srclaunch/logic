import { Condition } from "../../index";

export enum ColorCondition {
  IsHSLColor = Condition.IsHSLColor,
  IsHexColor = Condition.IsHexColor,
  IsNotNull = Condition.IsNotNull,
  IsRGBColor = Condition.IsRGBColor,
  IsString = Condition.IsString,
}
