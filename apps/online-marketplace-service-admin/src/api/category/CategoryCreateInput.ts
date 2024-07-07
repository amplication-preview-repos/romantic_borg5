import { AdCreateNestedManyWithoutCategoriesInput } from "./AdCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  ads?: AdCreateNestedManyWithoutCategoriesInput;
};
