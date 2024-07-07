import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  contactDetails?: string | null;
  profilePic?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
