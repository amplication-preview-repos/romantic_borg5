import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminPanelCreateInput = {
  ad?: AdWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
