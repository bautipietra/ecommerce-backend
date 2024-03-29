"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const subscribe_routes_1 = __importDefault(require("./routes/subscribe.routes"));
const review_routes_1 = __importDefault(require("./routes/review.routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: ['http://sneakers.bautistapietraroia.com.ar']
}));
app.use(express_1.default.json());
/* Routes */
app.use(user_routes_1.default);
app.use(subscribe_routes_1.default);
app.use(review_routes_1.default);
exports.default = app;
