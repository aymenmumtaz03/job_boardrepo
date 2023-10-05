'use strict';
// eslint-disable-next-line no-undef
module.exports = {
  up: async(queryInterface, Sequelize) => {
  await queryInterface.createTable('Job_posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    company_name: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.INTEGER
    },
    industry: {
      type: Sequelize.STRING
    },
    salary: {
      type: Sequelize.INTEGER
    },
    benefits: {
      type: Sequelize.STRING
    },
    discription: {
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
  await queryInterface.dropTable('Job_posts');
}
};