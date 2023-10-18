'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });

      Company.hasMany(models.JobPost, {
        foreignKey: 'company_id',
        as: 'jobPosts',
      });

      Company.hasMany(models.JobApplication, {
        foreignKey: 'company_id',
        as: 'application',
      });

      Company.hasMany(models.Message, {
        foreignKey: 'company_id',
        as: 'messages',
      });
    }
  }

  Company.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Company',
      tableName: 'companies',
    },
  );
  return Company;
};
