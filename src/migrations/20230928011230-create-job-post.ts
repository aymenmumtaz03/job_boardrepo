'use strict';

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.createTable('job_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      company_name: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.INTEGER,
      },
      industry: {
        type: Sequelize.STRING,
      },
      salary: {
        type: Sequelize.INTEGER,
      },
      benefits: {
        type: Sequelize.STRING,
      },
      discription: {
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
    await queryInterface.dropTable('job_posts');
  },
};
