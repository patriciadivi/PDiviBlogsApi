'use strict';
//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').Sequelize } sequelize
 * @param {import ('sequelize').DataTypes} DataTypes
 */

const  createBlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost',{
        id: {
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        content:{
            type: DataTypes.STRING,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        published: {
            allowNull: false,
            type: DataTypes.DATE,
            // defaultValue: DataTypes.NOW,
        },
        updated: {
            allowNull: false,
            type: DataTypes.DATE,
            // defaultValue: DataTypes.NOW,
        },
    },{
        tableName: 'BlogPosts', //nome da tabela
        createdAt: 'published',
        updatedAt: 'updated',
    });

    BlogPost.associate = (db) => {
        BlogPost.belongsTo(db.User, { 
            as: 'user',
            foreignKey: 'userId' 
        });
    };

    // BlogPost.associate = (db) => {
    //     BlogPost.hasMany(db.PostCategorie, { 
    //         as: 'postCategorie',
    //         foreignKey: 'postId' 
    //     });
    // };

    return BlogPost;
};

module.exports = createBlogPostModel;