const Sequelize = require("sequelize");

const sequelize = new Sequelize("groupomania_bdd", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 8889,
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
    force: true,
  })
  .then(() => {
    console.log("Database & tables created");
  });

module.exports = sequelize;
