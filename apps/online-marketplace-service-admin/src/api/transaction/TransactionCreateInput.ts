import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";

export type TransactionCreateInput = {
  totalPrice?: number | null;
  status?: "Option1" | null;
  buyer?: string | null;
  seller?: string | null;
  ad?: AdWhereUniqueInput | null;
};
