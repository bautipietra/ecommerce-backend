import { DataSource } from 'typeorm'
import { Product } from './models/product'
import { User } from './models/User'

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } =
  process.env

const NUM_DB_PORT = Number(DB_PORT) // TypeORM expects a number

const db = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  port: NUM_DB_PORT,
  database: DB_NAME,
  entities: [User, Product],
  logging: true,
  synchronize: true
})

export default db
