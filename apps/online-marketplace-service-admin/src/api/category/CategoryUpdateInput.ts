import { AdUpdateManyWithoutCategoriesInput } from "./AdUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  ads?: AdUpdateManyWithoutCategoriesInput;
};
