"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controllers_1 = require("../controllers/review.controllers");
const router = (0, express_1.Router)();
router.post('/review', review_controllers_1.createReview);
exports.default = router;
