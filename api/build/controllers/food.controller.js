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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.updateFood = exports.createFood = void 0;
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_controller_1 = require("./auth.controller");
// CHECK IS ADMIN
const checkIsAdmin = (authorization) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, role } = jsonwebtoken_1.default.verify(authorization, auth_controller_1.secretKey);
        const user = yield models_1.UserModel.findOne({ _id: id });
        if (!user || role !== "admin") {
            return false;
        }
        return true;
    }
    catch (error) {
        return false;
    }
});
// CREATE FOOD
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, ingredients, imgPath, price, discount, category } = req.body;
    // CHECK IS ADMIN
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials: AUTHORIZATION NOT FOUND",
        });
    }
    const isAdmin = yield checkIsAdmin(authorization);
    if (!isAdmin) {
        return res.status(401).json({
            message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
        });
    }
    // CREATE FOOD
    const isRemain = yield models_1.FoodModel.findOne({ name });
    if (isRemain) {
        return res.status(401).json({
            message: "food name already exist",
        });
    }
    try {
        yield models_1.FoodModel.create({
            name,
            ingredients,
            imgPath,
            price,
            discount,
            category,
        });
        return res.json({ message: `"${name}" food  created` });
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error, message: "could not create food" });
    }
});
exports.createFood = createFood;
// UPDATE FOOD
const updateFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, ingredients, imgPath, price, discount, category, _id } = req.body;
    // CHECK IS ADMIN
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials: AUTHORIZATION NOT FOUND",
        });
    }
    const isAdmin = yield checkIsAdmin(authorization);
    if (!isAdmin) {
        return res.status(401).json({
            message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
        });
    }
    // UPDATE FOOD
    const thisFood = yield models_1.FoodModel.findOne({ _id });
    if (!thisFood) {
        return res.status(401).json({
            message: "food not found",
        });
    }
    try {
        yield models_1.FoodModel.updateOne({ _id: _id }, { name, ingredients, imgPath, price, discount, category });
        return res.json("food is successfully updated");
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error, message: "could not update food detail" });
    }
});
exports.updateFood = updateFood;
// CREATE CATEGORY
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    // CHECK IS ADMIN
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials: AUTHORIZATION NOT FOUND",
        });
    }
    const isAdmin = yield checkIsAdmin(authorization);
    if (!isAdmin) {
        return res.status(401).json({
            message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
        });
    }
    // CREATE CATEGORY
    const isRemain = yield models_1.CategoryModel.findOne({ name: name });
    if (isRemain) {
        return res.status(401).json({
            message: "Category already exists",
        });
    }
    try {
        yield models_1.CategoryModel.create({
            name,
        });
        return res.json({ message: `"${name}" category  created` });
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error, message: "could not create category" });
    }
});
exports.createCategory = createCategory;
// UPDATE CATEGORY
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, _id } = req.body;
    // CHECK IS ADMIN
    // const { authorization } = req.headers;
    // if (!authorization) {
    //   return res.status(401).json({
    //     message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    //   });
    // }
    // const isAdmin = await checkIsAdmin(authorization);
    // if (!isAdmin) {
    //   return res.status(401).json({
    //     message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
    //   });
    // }
    // UPDATE CATEGORY
    const isRemain = yield models_1.CategoryModel.findOne({ _id: _id });
    console.log(isRemain);
    if (!isRemain) {
        return res.status(401).json({
            message: "category not found",
        });
    }
    try {
        yield models_1.CategoryModel.findByIdAndUpdate(_id, { name });
        return res.json({ message: `"${name}" category  updated local` });
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error, message: "could not update category" });
    }
});
exports.updateCategory = updateCategory;
// DELETE CATEGORY
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, _id } = req.body;
    // CHECK IS ADMIN
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials: AUTHORIZATION NOT FOUND",
        });
    }
    const isAdmin = yield checkIsAdmin(authorization);
    if (!isAdmin) {
        return res.status(401).json({
            message: "YOU ARE NOT ADMIN OR USER NOT FOUND",
        });
    }
    // DELETE CATEGORY
    const isRemain = yield models_1.CategoryModel.findOne({ _id: _id });
    if (!isRemain) {
        return res.status(401).json({
            message: "category not found",
        });
    }
    try {
        yield models_1.CategoryModel.deleteOne({
            name,
            _id,
        });
        return res.json({ message: `"${name}" category deleted` });
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error, message: "could not add category" });
    }
});
exports.deleteCategory = deleteCategory;
