'use strict';
const {
  Model
// eslint-disable-next-line no-undef
} = require('sequelize');
// eslint-disable-next-line no-undef
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.JobPost, {
        foreignKey: 'company_id',
        as: 'jobPosts'
      });

      Company.hasMany(models.JobApplication, {
        foreignKey: 'company_id',
        as: 'application'
      });

      Company.hasMany(models.Message, {
        foreignKey: 'company_id',
        as: 'messages'
      });

    }
  }
  
  Company.init({
    company_name: DataTypes.STRING,
    location: DataTypes.INTEGER,
    discription: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Company',
    tableName:'companies'
  });
  return Company;
};