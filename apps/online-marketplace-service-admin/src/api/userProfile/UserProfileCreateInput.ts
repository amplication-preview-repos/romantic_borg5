import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileCreateInput = {
  contactDetails?: string | null;
  profilePic?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
