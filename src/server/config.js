const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.development.server') })

const config = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

module.exports = config;
