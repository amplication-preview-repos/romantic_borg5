import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";

export type TransactionUpdateInput = {
  totalPrice?: number | null;
  status?: "Option1" | null;
  buyer?: string | null;
  seller?: string | null;
  ad?: AdWhereUniqueInput | null;
};
