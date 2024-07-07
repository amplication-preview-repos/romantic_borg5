import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contactDetails: string | null;
  profilePic: JsonValue;
  user?: User | null;
};
