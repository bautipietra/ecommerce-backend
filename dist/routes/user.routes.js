"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
router.route('/user/register').post(user_controllers_1.registerUser);
router.route('/user/login').post(user_controllers_1.loginUser);
router.route('/user/renew').post(user_controllers_1.validateToken);
exports.default = router;
