require("dotenv").config();

module.exports = {
  HOST: process.env.MONGO_HOST,
  PORT: process.env.MONGO_PORT,
  DB: process.env.MONGO_DB,
  ATLAS: process.env.MONGO_ATLAS
};