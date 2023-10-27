'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// eslint-disable-next-line no-undef
module.exports = (sequelize, DataTypes) => {
    class Notification extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Notification.belongsTo(models.Message, {
                foreignKey: 'notification_id',
                as: 'message',
            });
        }
    }
    Notification.init({
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Notification',
        tableName: 'notifications'
    });
    return Notification;
};
