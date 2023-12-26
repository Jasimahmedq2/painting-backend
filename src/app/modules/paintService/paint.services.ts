import { IPaitService, IServiceFilter } from "./paint.interface";
import { PaintService } from "./paint.model";
import { PaintServiceUtility } from "./paint.utility";

const addPaintService = async (payload: IPaitService) => {
  const result = await PaintService.create(payload);
  return result;
};
const retrievePaintServices = async (): Promise<IPaitService[] | null> => {
  const result = await PaintService.find({});
  return result;
};

export const findProducts = async (
  query: Partial<IServiceFilter>,
  page: number,
  perPage: number,
  sortField: string,
  sortOrder: "asc" | "desc"
) => {
  const filter = PaintServiceUtility.buildFilter(query);
  const sort = { [sortField]: sortOrder };

  const totalResults = await PaintService.countDocuments(filter);
  const results = await PaintService.find(filter)
    .sort(sort)
    .skip((page - 1) * perPage)
    .limit(perPage)
    .lean()
    .exec();

  return {
    totalResults,
    results,
  };
};

const retrieveSinglePaint = async (
  id: string
): Promise<IPaitService | null> => {
  const result = await PaintService.findById(id).populate('painter');
  return result;
};
const removePaintService = async (id: string): Promise<IPaitService | null> => {
  const result = await PaintService.findByIdAndDelete(id);
  return result;
};
const updatePaintService = async (
  id: string,
  payload: Partial<IPaitService>
): Promise<IPaitService | null> => {
  const result = await PaintService.findOneAndUpdate({ _id: id }, payload);
  return result;
};

export const PaintServices = {
  addPaintService,
  retrievePaintServices,
  retrieveSinglePaint,
  removePaintService,
  updatePaintService,
  findProducts,
};
