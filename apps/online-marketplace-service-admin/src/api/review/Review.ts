export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  reviewer: string | null;
  reviewee: string | null;
};
