'use strict';
const {Model} = require('sequelize');

module.exports =  (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobApplication.belongsTo(models.Seeker, {
        foreignKey: 'seeker_id', // This foreign key should match the one used in the Seeker model
        as: 'seeker',
      });
    }
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