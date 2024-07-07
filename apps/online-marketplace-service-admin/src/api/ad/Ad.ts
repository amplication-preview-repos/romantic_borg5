import { Category } from "../category/Category";
import { User } from "../user/User";
import { Transaction } from "../transaction/Transaction";
import { AdminPanel } from "../adminPanel/AdminPanel";

export type Ad = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  price: number | null;
  category?: Category | null;
  user?: User | null;
  transactions?: Array<Transaction>;
  adminPanels?: Array<AdminPanel>;
};
