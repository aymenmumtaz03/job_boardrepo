/* eslint-disable no-unused-vars */
'use strict';
// eslint-disable-next-line no-undef
module.exports = {
up: async(queryInterface, Sequelize) => {
  await queryInterface.createTable('Messages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    sender_id: {
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
},
down: async(queryInterface, Sequelize)=> {
  await queryInterface.dropTable('Messages');
}
};