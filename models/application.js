'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Application.belongsTo(models.Seeker, {
        foreignKey: 'seeker_id', // This foreign key should match the one used in the Seeker model
        as: 'seeker',
      });
    }
  }
  Application.init({
    status: DataTypes.STRING,
    seeker_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'application',
  });
  return Application;
};