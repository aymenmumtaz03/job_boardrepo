'use strict';
// eslint-disable-next-line no-undef
module.exports = {
 up: async(queryInterface, Sequelize) => {
  await queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
},
 // eslint-disable-next-line no-unused-vars
 down: async(queryInterface, Sequelize) => {
  await queryInterface.dropTable('users');
}
};