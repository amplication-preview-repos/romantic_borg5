import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";
import { AdUpdateManyWithoutUsersInput } from "./AdUpdateManyWithoutUsersInput";
import { AdminPanelUpdateManyWithoutUsersInput } from "./AdminPanelUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
  ads?: AdUpdateManyWithoutUsersInput;
  adminPanels?: AdminPanelUpdateManyWithoutUsersInput;
};
