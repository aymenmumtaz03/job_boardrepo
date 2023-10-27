'use strict';
import { Model,Sequelize } from "sequelize";

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
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