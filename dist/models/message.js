'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Message extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Message.hasOne(models.Notification, {
                foreignKey: 'notification_id',
                as: 'notification'
            });
        }
    }
    Message.init({
        sender_id: DataTypes.INTEGER,
        content: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Message',
    });
    return Message;
};
