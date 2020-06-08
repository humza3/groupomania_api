const env = require("./env");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  port: 8889,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log(`Database & tables created!`);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/users")(sequelize, Sequelize);

module.exports = db;