import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  totalPrice?: SortOrder;
  status?: SortOrder;
  buyer?: SortOrder;
  seller?: SortOrder;
  adId?: SortOrder;
};
