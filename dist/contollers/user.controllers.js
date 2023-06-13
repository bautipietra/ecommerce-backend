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
exports.createUser = void 0;
const User_1 = require("../models/User");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        /* If user already exist not create it */
        const alreadyExist = yield User_1.User.findOne({
            where: { email: email }
        });
        if (alreadyExist)
            return res.status(400).send({ message: 'User already exists' });
        /* If user not exist create it */
        const user = new User_1.User();
        user.email = email;
        user.password = password;
        const savedUser = yield user.save();
        res.send(savedUser);
    }
    catch (error) {
        error instanceof Error &&
            res.status(500).send({ message: error.message });
    }
});
exports.createUser = createUser;
