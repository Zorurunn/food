"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictModel = void 0;
const mongoose_1 = require("mongoose");
const districtSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.DistrictModel = (0, mongoose_1.model)("district", districtSchema);
