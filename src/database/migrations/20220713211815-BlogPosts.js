'use strict';

const { NOW } = require('sequelize');
const sequelize = require('sequelize');

//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').queryInterface } queryInterface
 * @param {import ('sequelize').Sequelize} Sequelize
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('BlogPosts', { 
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId : {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        field: 'published',
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        field: 'updated',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('BlogPosts');
  }
};
