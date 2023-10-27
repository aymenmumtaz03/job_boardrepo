'use strict';
/** @type {import('sequelize-cli').Migration} */
import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
