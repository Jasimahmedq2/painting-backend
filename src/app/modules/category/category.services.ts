import { IPaintCategory } from "./category.interface";
import { Category } from "./category.model";

const addCategory = async (payload: IPaintCategory) => {
  const result = await Category.create(payload);
  return result;
};

const retrieveCategories = async (payload: IPaintCategory) => {
  const result = await Category.find({});
  return result;
};

export const CategoryServices = {
  retrieveCategories,
  addCategory,
};
