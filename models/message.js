'use strict';
const {
  Model
// eslint-disable-next-line no-undef
} = require('sequelize');
// eslint-disable-next-line no-undef
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
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
    modelName: 'message',
  });
  return Message;
};