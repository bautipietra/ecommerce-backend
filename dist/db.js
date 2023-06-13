"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./models/User");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;
const NUM_DB_PORT = Number(DB_PORT); // TypeORM expects a number
const db = new typeorm_1.DataSource({
    type: 'postgres',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    port: NUM_DB_PORT,
    database: DB_NAME,
    entities: [User_1.User],
    logging: true,
    synchronize: true
});
exports.default = db;
