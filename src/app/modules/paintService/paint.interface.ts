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
