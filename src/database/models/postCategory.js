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
            references: {
                model: 'BlogPosts',
                key: 'id',
            }
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Category',
                key: 'id',
            }
        },
    },{
        tableName: 'PostCategories',
        timestamps: false,
    })

        PostCategorie.associate = (db) => {
            db.Category.belongsToMany(db.BlogPost, {
              as: 'blogPost',
              through: PostCategorie,
              foreignKey: 'postId',
              otherKey: 'categoryId',
            });
            db.BlogPost.belongsToMany(db.Category, {
              as: 'category',
              through: PostCategorie,
              foreignKey: 'categoryId',
              otherKey: 'postId',
            });
          }

    return PostCategorie;
};

module.exports = createPostCategorie;
