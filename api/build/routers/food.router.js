"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const food_controller_1 = require("../controllers/food.controller");
const foodRouter = (0, express_1.Router)();
foodRouter
    .post("/createFood", food_controller_1.createFood)
    .post("/updateFood", food_controller_1.updateFood)
    .post("/createCategory", food_controller_1.createCategory)
    .post("/deleteCategory", food_controller_1.deleteCategory)
    .post("/updateCategory", food_controller_1.updateCategory);
exports.default = foodRouter;
