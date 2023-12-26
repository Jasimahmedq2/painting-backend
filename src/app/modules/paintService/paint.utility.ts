import { IServiceFilter } from "./paint.interface";

const buildFilter = (query: Partial<IServiceFilter>): any => {
  const filter: any = {};

  if (query?.search) {
    const searchRegex = new RegExp(query.search, "i");
    filter.$or = [
      { description: { $regex: searchRegex } },
      { name: { $regex: searchRegex } },
    ];
  }

  // Filter by description (case-insensitive regex search)
  if (query?.description) {
    filter.description = { $regex: query.description, $options: "i" };
  }

  // Filter by name (case-insensitive regex search)
  if (query?.name) {
    filter.name = { $regex: query.name, $options: "i" };
  }

  // Filter by minimum price
  if (query?.minPrice) {
    filter.price = { $gte: Number(query?.minPrice) };
  }

  // Filter by maximum price
  if (query?.maxPrice) {
    filter.price = { ...filter.price, $lte: Number(query?.maxPrice) };
  }

  // Add more filters for additional fields as needed.

  return filter;
};

export const PaintServiceUtility = {
  buildFilter,
};
