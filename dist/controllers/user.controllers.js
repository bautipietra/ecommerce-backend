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
exports.validateToken = exports.loginUser = exports.registerUser = void 0;
const User_1 = require("../models/User");
const jwt_1 = require("../helpers/jwt");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        /* Hash password */
        bcrypt.hash(password, 10, function (err, hash) {
            return __awaiter(this, void 0, void 0, function* () {
                user.password = hash;
                yield user.save();
            });
        });
        /* Generate token */
        const token = (0, jwt_1.generateToken)(user.id);
        res.send({ token });
    }
    catch (error) {
        error instanceof Error &&
            res.status(500).send({ message: error.message });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        /* If user not exist */
        const user = yield User_1.User.findOne({
            where: { email: email }
        });
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }
        /* If user exist */
        /* Compare password */
        bcrypt.compare(password, user.password, function (err, result) {
            if (result == true) {
                /* Generate token */
                const token = (0, jwt_1.generateToken)(user.id);
                res.send({ token });
            }
            else {
                res.status(400).send({ message: 'Password incorrect' });
            }
        });
    }
    catch (error) {
        error instanceof Error &&
            res.status(500).send({ message: error.message });
    }
});
exports.loginUser = loginUser;
const validateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        /* If token not exist */
        if (!token) {
            return res.status(400).send({ message: 'Token not found' });
        }
        /* If token exist */
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        const user = yield User_1.User.findOne({
            where: { id: id }
        });
        /* If token is invalid */
        if (!user) {
            return res.status(400).send({ message: 'Session not found' });
        }
        /* If token is valid, extends it */
        const newToken = (0, jwt_1.generateToken)(user.id);
        res.send({ newToken });
    }
    catch (error) {
        error instanceof Error &&
            res.status(500).send({ message: error.message });
    }
});
exports.validateToken = validateToken;
