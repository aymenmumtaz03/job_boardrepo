'use strict';
// eslint-disable-next-line no-undef
module.exports = {
  up: async(queryInterface, Sequelize)=> {
  await queryInterface.createTable('Applications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    seeker_id: {
      type: Sequelize.INTEGER
    },
    status: {
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
// eslint-disable-next-line no-unused-vars
down: async(queryInterface, Sequelize) => {
  await queryInterface.dropTable('Applications');
}
};