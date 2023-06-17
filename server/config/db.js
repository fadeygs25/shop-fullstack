const { Client } = require('pg')
const env = require('dotenv').config()

const db = new Client({
  host: "localhost",
  database: "blockchain",
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: 5432,
})

db.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('PostgreSql Database connected successfully');
  }
});

module.exports = db