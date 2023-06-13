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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscribe = void 0;
const User_1 = require("../models/User");
const createSubscribe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, review, rating } = req.body;
        /* If email doesn't exist */
        const user = yield User_1.User.findOne({
            where: { email: email }
        });
        if (!user)
            return res
                .status(400)
                .send({ message: "The email isn't registered" });
        /* If email already sends a review */
        if (!user.review)
            return res
                .status(400)
                .send({ message: 'You have already send a review' });
        /* Send a review */
        user.review = {
            review,
            rating
        };
        User_1.User.update(user.id, user);
        res.send(user);
    }
    catch (error) {
        error instanceof Error &&
            res.status(500).send({ message: error.message });
    }
});
exports.createSubscribe = createSubscribe;
