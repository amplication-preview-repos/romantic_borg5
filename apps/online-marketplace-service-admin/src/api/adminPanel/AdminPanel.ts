import { Ad } from "../ad/Ad";
import { User } from "../user/User";

export type AdminPanel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ad?: Ad | null;
  user?: User | null;
};
