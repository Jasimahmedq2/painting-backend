import { PaintService } from "../paintService/paint.model";
import { IPaintCategory } from "./category.interface";
import { Category } from "./category.model";

const addCategory = async (payload: IPaintCategory) => {
  const result = await Category.create(payload);
  return result;
};

const retrieveCategories = async () => {
  const result = await Category.find({});
  return result;
};
const retrieveSingleCategory = async (id: string) => {
  const result = await PaintService.find({ category: id });
  return result;
};

export const CategoryServices = {
  retrieveCategories,
  addCategory,
  retrieveSingleCategory,
};
