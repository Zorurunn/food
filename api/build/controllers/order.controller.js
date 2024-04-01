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
exports.createOrder = exports.getOrders = void 0;
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_controller_1 = require("./auth.controller");
// GET ORDERS
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials Auth nashi",
        });
    }
    const { id } = jsonwebtoken_1.default.verify(authorization, auth_controller_1.secretKey);
    const user = yield models_1.UserModel.findOne({ _id: id });
    if (!user) {
        return res.status(401).json({
            message: "No user found",
        });
    }
    const orders = yield models_1.OrderModel.find({ userId: user.id });
    res.json(orders);
});
exports.getOrders = getOrders;
// CREATE ORDER
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate new Date
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newDate = year + "/" + month + "/" + day;
    try {
        const { deliveryAddress, foods } = req.body;
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({
                message: "Invalid credentials Auth nashi",
            });
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, auth_controller_1.secretKey);
        const user = yield models_1.UserModel.findOne({ _id: id });
        if (!user) {
            return res.status(401).json({
                message: "No User found",
            });
        }
        yield models_1.OrderModel.create({
            userId: user.id,
            deliveryAddress,
            foods,
            createdAt: newDate,
            deliveryStatus: false,
        });
        return res.json({ message: "Order completed" });
    }
    catch (e) {
        return res
            .status(401)
            .json({ error: e, message: "Order didn't complete. Try again" });
    }
});
exports.createOrder = createOrder;
