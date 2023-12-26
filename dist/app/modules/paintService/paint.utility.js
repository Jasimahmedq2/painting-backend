"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaintServiceUtility = void 0;
const buildFilter = (query) => {
    const filter = {};
    if (query === null || query === void 0 ? void 0 : query.search) {
        const searchRegex = new RegExp(query.search, "i");
        filter.$or = [
            { description: { $regex: searchRegex } },
            { name: { $regex: searchRegex } },
        ];
    }
    // Filter by description (case-insensitive regex search)
    if (query === null || query === void 0 ? void 0 : query.description) {
        filter.description = { $regex: query.description, $options: "i" };
    }
    // Filter by name (case-insensitive regex search)
    if (query === null || query === void 0 ? void 0 : query.name) {
        filter.name = { $regex: query.name, $options: "i" };
    }
    // Filter by minimum price
    if (query === null || query === void 0 ? void 0 : query.minPrice) {
        filter.price = { $gte: Number(query === null || query === void 0 ? void 0 : query.minPrice) };
    }
    // Filter by maximum price
    if (query === null || query === void 0 ? void 0 : query.maxPrice) {
        filter.price = Object.assign(Object.assign({}, filter.price), { $lte: Number(query === null || query === void 0 ? void 0 : query.maxPrice) });
    }
    // Add more filters for additional fields as needed.
    return filter;
};
exports.PaintServiceUtility = {
    buildFilter,
};
