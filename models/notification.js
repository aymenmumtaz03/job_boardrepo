'use strict';
const {
  Model
// eslint-disable-next-line no-undef
} = require('sequelize');
// eslint-disable-next-line no-undef
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notification.belongsTo(models.Message, {
        foreignKey: 'notification_id', // This foreign key should match the one used in the Message model
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