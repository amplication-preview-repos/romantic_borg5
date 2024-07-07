import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAdsInput } from "./TransactionCreateNestedManyWithoutAdsInput";
import { AdminPanelCreateNestedManyWithoutAdsInput } from "./AdminPanelCreateNestedManyWithoutAdsInput";

export type AdCreateInput = {
  title?: string | null;
  description?: string | null;
  price?: number | null;
  category?: CategoryWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutAdsInput;
  adminPanels?: AdminPanelCreateNestedManyWithoutAdsInput;
};
