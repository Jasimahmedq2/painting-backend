import express from "express";
import { NewsLetterController } from "./newsLetter.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { NewsLetterValidation } from "./newsLetter.validation";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
const router = express.Router();

router.post(
  "/subscribe",
  auth(
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.CUSTOMER,
    UserRoles.PAINTER
  ),

  NewsLetterController.subscribe
);

export const newsLetterRoutes = router;
