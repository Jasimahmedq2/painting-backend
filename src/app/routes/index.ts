import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { wishListRoutes } from "../modules/wishList/wishlist.routes";
import { orderRoutes } from "../modules/order/order.routes";
import { PaintRoutes } from "../modules/paintService/paint.routes";
import { categoryRoutes } from "../modules/category/categor.routes";
import { cartRoutes } from "../modules/cart/cart.routes";
import { shippingRoutes } from "../modules/shipping/shipping.routes";

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
    element: shippingRoutes,
  },
  {
    path: "/order",
    element: orderRoutes,
  },
  {
    path: "/service",
    element: PaintRoutes,
  },
  {
    path: "/category",
    element: categoryRoutes,
  },
  {
    path: "/cart",
    element: cartRoutes,
  },
];

CoreRoutes.forEach((route) => router.use(route.path, route.element));

export default router;
