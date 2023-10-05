'use strict';
// eslint-disable-next-line no-undef
module.exports = {
 up: async(queryInterface, Sequelize) => {
  await queryInterface.createTable('Seekers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    skill: {
      type: Sequelize.STRING
    },
    resume: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.INTEGER
    },
    imageurl: {
      type: Sequelize.INTEGER
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
 down: async(queryInterface, Sequelize)=> {
  await queryInterface.dropTable('Seekers');
}
};