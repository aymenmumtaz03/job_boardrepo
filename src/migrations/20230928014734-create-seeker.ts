'use strict';

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.createTable('seekers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      skill: {
        type: Sequelize.STRING,
      },
      resume: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.INTEGER,
      },
      imageurl: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.dropTable('seekers');
  },
};
