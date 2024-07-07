import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contactDetails?: SortOrder;
  profilePic?: SortOrder;
  userId?: SortOrder;
};
