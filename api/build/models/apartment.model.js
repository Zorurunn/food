"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentModel = void 0;
const mongoose_1 = require("mongoose");
const apartmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.ApartmentModel = (0, mongoose_1.model)("apartment", apartmentSchema);
