"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const foodSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    imgPath: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: false,
        default: 0,
    },
    category: {
        type: String,
        required: true,
        // default: "breakfast",
    },
});
exports.FoodModel = (0, mongoose_1.model)("food", foodSchema);
