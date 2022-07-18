'use strict';

//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').Sequelize } sequelize
 * @param {import ('sequelize').DataTypes} DataTypes
 */

const createPostCategorie = (sequelize, DataTypes) => {
    const PostCategorie = sequelize.define('PostCategorie', {
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
        PostCategorie.belongsTo(db.BlogPost, { as: 'BlogPosts', foreignKey: 'postId' })
    };

    PostCategorie.associate = (db) => {
        PostCategorie.belongsTo(db.Category, { as: 'Categories', foreignKey: 'categoryId' })
    };

    return PostCategorie;
};

module.exports = createPostCategorie;