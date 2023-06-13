"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../contollers/user.controllers");
const router = (0, express_1.Router)();
router.route('/user').post(user_controllers_1.createUser);
exports.default = router;
