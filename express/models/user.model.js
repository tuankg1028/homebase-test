module.exports = (database, Sequelize) => {
  return database.define("user", {
    fullName: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
};
