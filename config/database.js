// config/database.js
const dotenv = require("dotenv");
dotenv.config();

console.log('db')
module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
  