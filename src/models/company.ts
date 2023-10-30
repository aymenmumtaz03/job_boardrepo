'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database';
import User from './user';

// module.exports = (sequelize:Sequelize, dataTypes: typeof DataTypes) => {
//   class Company extends Model {

class Company extends Model {
  public id!: string;
  public name!: string;
  public url!: string;
  public phonenumber!: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  public static associate(models: any): void {
    Company.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

Company.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Company',
    tableName: 'companies',
  },
);
export default Company;
