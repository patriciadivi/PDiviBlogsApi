'use strict';

//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').Sequelize } sequelize
 * @param {import ('sequelize').DataTypes} DataTypes
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', { 
      postId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdated: 'CASCADE',
      },
      categoryId : {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdated: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
