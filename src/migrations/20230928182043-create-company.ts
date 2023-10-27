'use strict';
import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      user_id: {
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

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('companies');
  },
};
