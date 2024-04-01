"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUser_controller_1 = require("../controllers/getUser.controller");
const getUserRouter = (0, express_1.Router)();
getUserRouter.get("/getUser", getUser_controller_1.getUser);
exports.default = getUserRouter;
