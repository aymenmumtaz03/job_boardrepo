'use strict';

import { DataTypes, Model, Sequelize } from "sequelize";
const {Model:any} = require('sequelize');
module.exports =  (sequelize:Sequelize, DataTypes:any) => {
  class JobApplication extends Model {
    // static init(arg0: { status: any; seeker_id: { type: any; allowNull: boolean; }; }, arg1: { sequelize: Sequelize; modelName: string; tableName: string; }) {
    //   throw new Error("Method not implemented.");
    // }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      JobApplication.belongsTo(models.Seeker, {
        foreignKey: 'seeker_id', // This foreign key should match the one used in the Seeker model
        as: 'seeker',
      });
    }
    // static belongsTo(Seeker: any, arg1: {
    //   foreignKey: string; // This foreign key should match the one used in the Seeker model
    //   as: string;
    // }) {
    //   throw new Error("Method not implemented.");
    // }
  }
  JobApplication.init({
    status: DataTypes.STRING,
    seeker_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'JobApplication',
    tableName:'applications',
  });
  return JobApplication;
};