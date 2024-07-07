import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionUpdateManyWithoutAdsInput } from "./TransactionUpdateManyWithoutAdsInput";
import { AdminPanelUpdateManyWithoutAdsInput } from "./AdminPanelUpdateManyWithoutAdsInput";

export type AdUpdateInput = {
  title?: string | null;
  description?: string | null;
  price?: number | null;
  category?: CategoryWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutAdsInput;
  adminPanels?: AdminPanelUpdateManyWithoutAdsInput;
};
