import { IPaitService } from "./paint.interface";
import { PaintService } from "./paint.model";

const addPaintService = async (payload: IPaitService) => {
  const result = await PaintService.create(payload);
  return result;
};
const retrievePaintServices = async (): Promise<IPaitService[] | null> => {
  const result = await PaintService.find({});
  return result;
};
const retrieveSinglePaint = async (
  id: string
): Promise<IPaitService | null> => {
  const result = await PaintService.findById(id);
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
};
