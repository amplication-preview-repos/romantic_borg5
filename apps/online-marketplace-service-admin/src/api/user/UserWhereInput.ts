import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";
import { AdListRelationFilter } from "../ad/AdListRelationFilter";
import { AdminPanelListRelationFilter } from "../adminPanel/AdminPanelListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userProfiles?: UserProfileListRelationFilter;
  ads?: AdListRelationFilter;
  adminPanels?: AdminPanelListRelationFilter;
};
