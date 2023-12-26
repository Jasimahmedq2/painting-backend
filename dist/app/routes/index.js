"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_routes_1 = require("../modules/user/user.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const wishlist_routes_1 = require("../modules/wishList/wishlist.routes");
const order_routes_1 = require("../modules/order/order.routes");
const paint_routes_1 = require("../modules/paintService/paint.routes");
const categor_routes_1 = require("../modules/category/categor.routes");
const cart_routes_1 = require("../modules/cart/cart.routes");
const shipping_routes_1 = require("../modules/shipping/shipping.routes");
const newsLetter_routes_1 = require("../modules/newLetter/newsLetter.routes");
const payment_routes_1 = require("../modules/payment/payment.routes");
const router = express_1.default.Router();
const CoreRoutes = [
    {
        path: "/auth",
        element: auth_route_1.AuthRoutes,
    },
    {
        path: "/user",
        element: user_routes_1.UserRoutes,
    },
    {
        path: "/admin",
        element: admin_routes_1.adminRoutes,
    },
    {
        path: "/wishList",
        element: wishlist_routes_1.wishListRoutes,
    },
    {
        path: "/shipping",
        element: shipping_routes_1.shippingRoutes,
    },
    {
        path: "/order",
        element: order_routes_1.orderRoutes,
    },
    {
        path: "/service",
        element: paint_routes_1.PaintRoutes,
    },
    {
        path: "/category",
        element: categor_routes_1.categoryRoutes,
    },
    {
        path: "/cart",
        element: cart_routes_1.cartRoutes,
    },
    {
        path: "/newsLetter",
        element: newsLetter_routes_1.newsLetterRoutes,
    },
    {
        path: "/payment",
        element: payment_routes_1.paymentRoutes,
    },
];
CoreRoutes.forEach((route) => router.use(route.path, route.element));
exports.default = router;
