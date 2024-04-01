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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApartments = exports.getKhoroos = exports.getDistricts = exports.getAllCategories = exports.getAllFoods = void 0;
const models_1 = require("../models");
// GET ALL FOODS
const getAllFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield models_1.FoodModel.find({});
    res.json(foods);
});
exports.getAllFoods = getAllFoods;
// GET ALL CATEGORIES
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield models_1.CategoryModel.find({});
    res.json(categories);
});
exports.getAllCategories = getAllCategories;
// GET DISTRICTS
const getDistricts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const districts = yield models_1.DistrictModel.find({});
    res.json(districts);
});
exports.getDistricts = getDistricts;
// GET KHOROO
const getKhoroos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const khoroos = yield models_1.KhorooModel.find({});
    res.json(khoroos);
});
exports.getKhoroos = getKhoroos;
// GET APARTMENT
const getApartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apartments = yield models_1.ApartmentModel.find({});
    res.json(apartments);
});
exports.getApartments = getApartments;
