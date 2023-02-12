"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const db = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'luli123',
    port: 5432,
    database: 'sneakers',
    entities: [],
    logging: true
});
exports.default = db;
