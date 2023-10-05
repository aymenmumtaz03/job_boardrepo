'use strict';
const {
  Model
// eslint-disable-next-line no-undef
} = require('sequelize');
// eslint-disable-next-line no-undef
module.exports = (sequelize, DataTypes) => {
  class Seeker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seeker.hasMany(models.Application, {
        foreignKey: 'seeker_id', // This foreign key should exist in the Application model
        as: 'applications',
      });
      Seeker.hasMany(models.Message, {
        foreignKey: 'seeker_id',
        as: 'messages'
      });
      
    }
  }
  Seeker.init({
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    skill: DataTypes.STRING,
    resume: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    imageurl: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seeker',
  });
  return Seeker;
};