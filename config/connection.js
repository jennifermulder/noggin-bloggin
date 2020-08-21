// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();


// create connection to our database, pass in your MySQL information for username and password
// --> importing base sequelize class to make methods off of later
// "new sequalize" = new connection
// console.log(process.env.DB_NAME, "data base name here", process.env.DB_PW, process.env.DB_USER);

let sequelize;
//use JAWSDB first, if not, use local host
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;