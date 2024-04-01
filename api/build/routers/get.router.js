"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_controller_1 = require("../controllers/get.controller");
const getRouter = (0, express_1.Router)();
getRouter
    .get("/getDistricts", get_controller_1.getDistricts)
    .get("/getKhoroos", get_controller_1.getKhoroos)
    .get("/getApartments", get_controller_1.getApartments)
    .get("/getAllCategories", get_controller_1.getAllCategories)
    .get("/getAllFoods", get_controller_1.getAllFoods);
exports.default = getRouter;
