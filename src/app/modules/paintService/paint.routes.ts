import express from "express";
import { PaintControllers } from "./paint.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import ValidateRequest from "../../middleware/validateRequest";
import { paintValidationSchema } from "./paint.validation";

const router = express.Router();

router.post(
  "/add-service",
  auth(UserRoles.ADMIN, UserRoles.SUPER_ADMIN),
  ValidateRequest(paintValidationSchema.addPaintSchema),
  PaintControllers.addPaintService
);
router.get("/get-services", PaintControllers.retrievePaintServices);
router.get("/get-services/test", PaintControllers.findProducts);
router.get("/get-service/:id", PaintControllers.retrieveSinglePaint);
router.delete(
  "/remove/:id",
  auth(UserRoles.ADMIN, UserRoles.SUPER_ADMIN),
  PaintControllers.removePaintService
);
router.patch(
  "/update/:id",
  ValidateRequest(paintValidationSchema.updatePaintSchema),
  auth(UserRoles.ADMIN, UserRoles.SUPER_ADMIN),
  PaintControllers.updatePaintService
);

export const PaintRoutes = router;
