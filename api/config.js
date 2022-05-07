const { Pool } = require("pg");

const pgUser = process.env.PGUSER
const pgHost = 'cafeel-site-postgres-1' // process.env.PGHOST
const pgDatabase = process.env.PGDATABASE
const pgPassword = process.env.PGPASSWORD
const pgPort = process.env.PGPORT

const connectionString = `postgresql://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`

const pool = new Pool({
    connectionString
  });

module.exports = { pool }