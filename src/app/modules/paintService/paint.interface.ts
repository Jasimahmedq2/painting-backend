import { Types } from "mongoose";

export type IReviews = {
  user: Types.ObjectId;
  review: {
    rating: number;
    text: string;
  };
};

export type IPaitService = {
  name: string;
  category: Types.ObjectId;
  price: number;
  description: string;
  painter: Types.ObjectId;
  image: string;
  reviews?: IReviews[];
};

export type IServiceFilter = {
  description?: string;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: "asc" | "desc";
  search?: string;
};
