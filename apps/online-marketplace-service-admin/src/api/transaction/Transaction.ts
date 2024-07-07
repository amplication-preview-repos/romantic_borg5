import { Ad } from "../ad/Ad";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalPrice: number | null;
  status?: "Option1" | null;
  buyer: string | null;
  seller: string | null;
  ad?: Ad | null;
};
