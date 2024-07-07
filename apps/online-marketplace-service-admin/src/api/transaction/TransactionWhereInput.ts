import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  totalPrice?: FloatNullableFilter;
  status?: "Option1";
  buyer?: StringNullableFilter;
  seller?: StringNullableFilter;
  ad?: AdWhereUniqueInput;
};
