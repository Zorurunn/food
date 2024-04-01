"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhorooModel = void 0;
const mongoose_1 = require("mongoose");
const khorooSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.KhorooModel = (0, mongoose_1.model)("khoroo", khorooSchema);
