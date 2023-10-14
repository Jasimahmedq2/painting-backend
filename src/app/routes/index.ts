import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { wishListRoutes } from "../modules/wishList/wishlist.routes";

const router = express.Router();

const CoreRoutes = [
  {
    path: "/auth",
    element: AuthRoutes,
  },
  {
    path: "/user",
    element: UserRoutes,
  },
  {
    path: "/admin",
    element: adminRoutes,
  },
  {
    path: "/wishList",
    element: wishListRoutes,
  },
  {
    path: "/shipping",
    element: wishListRoutes,
  },
];

CoreRoutes.forEach((route) => router.use(route.path, route.element));

export default router;
