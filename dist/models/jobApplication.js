'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const { Model: any } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class JobApplication extends sequelize_1.Model {
        // static init(arg0: { status: any; seeker_id: { type: any; allowNull: boolean; }; }, arg1: { sequelize: Sequelize; modelName: string; tableName: string; }) {
        //   throw new Error("Method not implemented.");
        // }
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            JobApplication.belongsTo(models.Seeker, {
                foreignKey: 'seeker_id',
                as: 'seeker',
            });
        }
    }
    JobApplication.init({
        status: DataTypes.STRING,
        seeker_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'JobApplication',
        tableName: 'applications',
    });
    return JobApplication;
};
