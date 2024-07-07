import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { AdminPanelListRelationFilter } from "../adminPanel/AdminPanelListRelationFilter";

export type AdWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  category?: CategoryWhereUniqueInput;
  user?: UserWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
  adminPanels?: AdminPanelListRelationFilter;
};
