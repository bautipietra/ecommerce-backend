import { DataSource } from 'typeorm'
import { Cart } from './models/Cart'
import { Favorite } from './models/Favorite'
import { Product } from './models/Product'
import { Review } from './models/Review'
import { Subscribe } from './models/Subscribe'
import { User } from './models/User'

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env

const NUM_DB_PORT = Number(DB_PORT) // TypeORM expects a number

const db = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  port: NUM_DB_PORT,
  database: DB_NAME,
  entities: [User, Product, Subscribe, Cart, Favorite, Review],
  logging: true,
  synchronize: true
})

export default db
