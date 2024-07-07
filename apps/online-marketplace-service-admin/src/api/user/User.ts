import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";
import { Ad } from "../ad/Ad";
import { AdminPanel } from "../adminPanel/AdminPanel";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userProfiles?: Array<UserProfile>;
  ads?: Array<Ad>;
  adminPanels?: Array<AdminPanel>;
};
