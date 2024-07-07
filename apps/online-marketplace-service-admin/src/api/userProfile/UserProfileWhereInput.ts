import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileWhereInput = {
  id?: StringFilter;
  contactDetails?: StringNullableFilter;
  profilePic?: JsonFilter;
  user?: UserWhereUniqueInput;
};
