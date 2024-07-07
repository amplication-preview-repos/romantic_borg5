import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminPanelUpdateInput = {
  ad?: AdWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
