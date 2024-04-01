"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_controller_1 = require("../controllers/email.controller");
const emailRouter = (0, express_1.Router)();
emailRouter.post("/email/send", email_controller_1.sendEmail);
exports.default = emailRouter;
