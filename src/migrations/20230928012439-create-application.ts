'use strict';

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.createTable('applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      seeker_id: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('applications');
  },
};
