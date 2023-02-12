import { DataSource } from 'typeorm'

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
  entities: [],
  logging: true
})

export default db
