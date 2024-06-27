// sequelize.js

const Sequelize = require("sequelize");
const config = require("./config/database"); // Import database configuration
// console.log('Database configuration:', config); // Log the database configuration
const DBconnection = new Sequelize(
  config.database,
  config.user,
  config.password, // Database password set to 'yes'
  {
    host: config.host,
    dialect: "mysql",
    logging: console.log,
    // Other options like logging can be added here
  }
);
DBconnection.authenticate().then(()=>{
  console.log('Conntected Succefully');
}).catch((err)=> {
  console.log(err)
});
DBconnection.query("SET time_zone = '+05:30';");
module.exports = DBconnection;
