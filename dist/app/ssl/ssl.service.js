"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sslService = void 0;
const config_1 = __importDefault(require("../../config"));
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = config_1.default.ssl.storeId;
const store_passwd = config_1.default.ssl.storePass;
const is_live = false; //true for live, false for sandbox
const initPayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        total_amount: payload === null || payload === void 0 ? void 0 : payload.total_amount,
        currency: "BDT",
        tran_id: payload === null || payload === void 0 ? void 0 : payload.tran_id,
        success_url: `https://paining-hut.vercel.app/api/v1/order/create-order/?tran_id=${payload === null || payload === void 0 ? void 0 : payload.tran_id}&userId=${payload === null || payload === void 0 ? void 0 : payload.cus_id}`,
        fail_url: "http://localhost:3030/fail",
        cancel_url: "http://localhost:3030/cancel",
        ipn_url: "http://localhost:3030/ipn",
        shipping_method: "Courier",
        product_name: "Computer.",
        product_category: "Electronic",
        product_profile: "general",
        cus_name: payload === null || payload === void 0 ? void 0 : payload.cus_name,
        cus_email: payload === null || payload === void 0 ? void 0 : payload.cus_email,
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,
        ship_country: "Bangladesh",
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = yield sslcz.init(data);
    return apiResponse;
});
// const validate = async (data: any) => {
//     try {
//         const response = await axios({
//             method: 'GET',
//             url: `${config.ssl.sslValidationUrl}?val_id=${data.val_id}&store_id=${config.ssl.storeId}&store_passwd=${config.ssl.storePass}&format=json`
//         })
//         console.log(response);
//         return response.data;
//     }
//     catch (err) {
//         throw new ApiError(400, "Payment error")
//     }
// }
exports.sslService = {
    initPayment,
};
