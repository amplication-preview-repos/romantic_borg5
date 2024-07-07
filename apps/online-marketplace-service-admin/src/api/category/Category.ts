import { Ad } from "../ad/Ad";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  ads?: Array<Ad>;
};
