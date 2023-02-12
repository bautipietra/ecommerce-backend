import 'reflect-metadata'

import * as dotenv from 'dotenv'
dotenv.config()

import app from './app'
import db from './db'

const { PORT } = process.env

async function main() {
  await db.initialize()

  app.listen(PORT)
  console.log('Server on port', PORT)
}

main()
