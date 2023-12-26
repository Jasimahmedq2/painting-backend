import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { PaintServices } from "./paint.services";
import sendResponse from "../../../shared/sendResponse";
import { IPaitService } from "./paint.interface";
import pick from "../../../shared/pick";

const addPaintService = catchAsync(async (req: Request, res: Response) => {
  const result = await PaintServices.addPaintService(req.body);
  sendResponse<IPaitService>(res, {
    statusCode: 200,
    success: true,
    message: "successfully created a new art service",
    data: result,
  });
});
const retrievePaintServices = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PaintServices.retrievePaintServices();
    sendResponse<IPaitService[]>(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve  services",
      data: result,
    });
  }
);
const retrieveSinglePaint = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PaintServices.retrieveSinglePaint(id);
  sendResponse<IPaitService>(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve a  service",
    data: result,
  });
});
const removePaintService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PaintServices.removePaintService(id);
  sendResponse<IPaitService>(res, {
    statusCode: 200,
    success: true,
    message: "successfully remove a  service",
    data: result,
  });
});
const updatePaintService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...updateInfo } = req.body;
  const result = await PaintServices.updatePaintService(id, updateInfo);
  sendResponse<IPaitService>(res, {
    statusCode: 200,
    success: true,
    message: "successfully update a  service",
    data: result,
  });
});
const findProducts = catchAsync(async (req: Request, res: Response) => {
  const { page, perPage, sortField, sortOrder, ...query } = (req as any).query;


  const result = await PaintServices.findProducts(
    query,
    page,
    perPage,
    sortField,
    sortOrder
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully update a  service",
    data: result,
  });
});

export const PaintControllers = {
  addPaintService,
  retrievePaintServices,
  retrieveSinglePaint,
  removePaintService,
  updatePaintService,
  findProducts,
};
