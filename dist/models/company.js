'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, dataTypes) => {
    class Company extends sequelize_1.Model {
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
    Company.init({
        name: sequelize_1.DataTypes.STRING,
        url: sequelize_1.DataTypes.STRING,
        phone: sequelize_1.DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Company',
        tableName: 'companies',
    });
    return Company;
};
