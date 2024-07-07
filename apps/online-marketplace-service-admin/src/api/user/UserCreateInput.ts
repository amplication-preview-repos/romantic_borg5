import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";
import { AdCreateNestedManyWithoutUsersInput } from "./AdCreateNestedManyWithoutUsersInput";
import { AdminPanelCreateNestedManyWithoutUsersInput } from "./AdminPanelCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
  ads?: AdCreateNestedManyWithoutUsersInput;
  adminPanels?: AdminPanelCreateNestedManyWithoutUsersInput;
};
