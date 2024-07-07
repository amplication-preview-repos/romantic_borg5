import { StringFilter } from "../../util/StringFilter";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminPanelWhereInput = {
  id?: StringFilter;
  ad?: AdWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
