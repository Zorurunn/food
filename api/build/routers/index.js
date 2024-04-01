"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_router_1 = __importDefault(require("./auth.router"));
const food_router_1 = __importDefault(require("./food.router"));
const email_router_1 = __importDefault(require("./email.router"));
const getUser_router_1 = __importDefault(require("./getUser.router"));
const get_router_1 = __importDefault(require("./get.router"));
exports.default = {
    authRouter: auth_router_1.default,
    foodRouter: food_router_1.default,
    emailRouter: email_router_1.default,
    getUserRouter: getUser_router_1.default,
    getRouter: get_router_1.default,
};
