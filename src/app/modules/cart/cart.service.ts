import { Types } from "mongoose";
import { ISingleService } from "./cart.interfaces";
import { Cart } from "./cart.model";
import { captureRejectionSymbol } from "nodemailer/lib/xoauth2";
import ApiError from "../../../errors/apiError";
import { PaintService } from "../paintService/paint.model";

const addToCart = async (userId: Types.ObjectId, service: ISingleService) => {
  try {
    if (!userId || !service || !service.service) {
      throw new ApiError(401, "Invalid input data");
    }

    const cartExist = await Cart.findOne({ user: userId });

    if (!cartExist) {
      const newCart = new Cart({
        user: userId,
        items: [{ service: service.service, quantity: 1 }],
      });
      await newCart.save();
    } else {
      const existingItem = cartExist.items.find(
        (item) => item.service.toString() === service.service.toString()
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartExist.items.push({ service: service.service, quantity: 1 });
      }

      await cartExist.save();
    }
  } catch (error) {
    throw new ApiError(401, "error occurred");
  }
};

const getCartWithPrices = async (userId: Types.ObjectId) => {
  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.service");

    if (!cart) {
      throw new ApiError(404, "cart not found");
    }

    let totalPrice = 0;

    for (const item of cart.items) {
      if (item.service) {
        const service = await PaintService.findById(item.service);

        if (service) {
          totalPrice += Number(service.price) * Number(item.quantity);
        }
      }
    }

    await cart.save();

    return { cart, totalPrice };
  } catch (error) {
    throw new ApiError(401, "error  occurred");
  }
};

const updateCartItemQuantity = async (
  userId: Types.ObjectId,
  serviceId: Types.ObjectId
) => {
  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      throw new ApiError(404, "Cart not found for this user");
    }

    const cartItem = cart.items.find(
      (item) => item.service.toString() === serviceId.toString()
    );

    if (!cartItem) {
      throw new ApiError(401, "Item not found in the cart");
    }

    cartItem.quantity += 1;

    await cart.save();

    return cart;
  } catch (error) {
    throw new ApiError(400, "something went wrong");
  }
};

const removeCartItem = async (
  userId: Types.ObjectId,
  serviceId: Types.ObjectId
) => {
  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      throw new ApiError(404, "Cart not found for this user");
    }

    const cartItem = cart.items.find(
      (item) => item.service.toString() === serviceId.toString()
    );

    if (!cartItem) {
      throw new ApiError(401, "Item not found in the cart");
    }

    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    }

    if (cartItem.quantity <= 1) {
      cart.items.filter(
        (item) => item.service.toString() !== serviceId.toString()
      );
      cart.save;
    }
    await cart.save();

    return cart;
  } catch (error) {
    throw new ApiError(400, "something went wrong");
  }
};

export const CartServices = {
  addToCart,
  getCartWithPrices,
  updateCartItemQuantity,
  removeCartItem,
};
