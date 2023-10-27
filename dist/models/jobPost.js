'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { Model } = require('sequelize');
// eslint-disable-next-line no-undef
module.exports = (sequelize, DataTypes) => {
    class JobPost extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            JobPost.belongsTo(models.Company, {
                foreignKey: 'company_id',
            });
            JobPost.belongsTo(models.User, {
                foreignKey: 'user_id',
            });
        }
    }
    JobPost.init({
        title: DataTypes.STRING,
        company_name: DataTypes.STRING,
        location: DataTypes.INTEGER,
        industry: DataTypes.STRING,
        salary: DataTypes.INTEGER,
        benefits: DataTypes.STRING,
        discription: DataTypes.STRING,
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'JobPost',
        tableName: 'job_posts'
    });
    return JobPost;
};
