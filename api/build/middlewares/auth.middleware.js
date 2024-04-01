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
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const controllers_1 = require("../controllers");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // if (req.path == "/") return next();
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials: AUTHORIZATION NOT FOUND",
        });
    }
    try {
        const { id, role } = jsonwebtoken_1.default.verify(authorization, controllers_1.secretKey);
        const user = yield models_1.UserModel.findOne({ _id: id });
        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials: USER NOT FOUND  ",
            });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid credentials in middleware",
        });
    }
});
exports.authMiddleware = authMiddleware;
