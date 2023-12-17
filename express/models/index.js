const Sequelize = require("sequelize");
const database = new Sequelize("sqlite::memory:");

const db = {};
db.Sequelize = Sequelize;
db.databaseConf = database;
// function to drop existing tables and re-sync database
db.dropRestApiTable = () => {
  db.databaseConf.sync({ force: true }).then(() => {
    console.log("user table just dropped and db re-synced.");
  });
};

db.users = require("./user.model")(database, Sequelize);
module.exports = db;
