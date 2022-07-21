'use strict';

//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').Sequelize } sequelize
 * @param {import ('sequelize').DataTypes} DataTypes
 */

const createPostCategorie = (sequelize, DataTypes) => {
    const PostCategorie = sequelize.define('PostCategory', {
        postId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            // primaryKey: true,
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            // primaryKey: true,
        },
    },{
        tableName: 'PostCategories',
        timestamps: false,
    })

        PostCategorie.associate = (db) => {
            db.Category.belongsToMany(db.BlogPost, {
              as: 'blogPost',
              through: PostCategorie,
              foreignKey: 'categoryId',
              otherKey: 'postId',
            });
            db.BlogPost.belongsToMany(db.Category, {
              as: 'categories',
              through: PostCategorie,
              foreignKey: 'postId',
              otherKey: 'categoryId',
            });
          }

    return PostCategorie;
};

module.exports = createPostCategorie;
