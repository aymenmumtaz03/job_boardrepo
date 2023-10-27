'use strict';
import { Model, Sequelize} from "sequelize";

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class Seeker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      Seeker.hasMany(models.JobApplication, {
        foreignKey: 'seeker_id',
        as: 'applications',
      });
      Seeker.hasMany(models.Message, {
        foreignKey: 'seeker_id',
        as: 'messages',
      });
    }
  }
  Seeker.init(
    {
      user_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      skill: DataTypes.STRING,
      resume: DataTypes.STRING,
      contact: DataTypes.INTEGER,
      imageurl: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Seeker',
    },
  );
  return Seeker;
};
