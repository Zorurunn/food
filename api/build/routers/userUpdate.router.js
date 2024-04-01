"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userUpdate_controller_1 = require("../controllers/userUpdate.controller");
const userUpdateRouter = (0, express_1.Router)();
userUpdateRouter.post("/userUpdate", userUpdate_controller_1.userUpdate);
exports.default = userUpdateRouter;
