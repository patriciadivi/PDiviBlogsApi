'use strict';
//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').Sequelize } sequelize
 * @param {import ('sequelize').DataTypes} DataTypes
 */


const createUserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,

        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        //options - opcional
        tableName: 'Users', //nome da tabela
        timestamps: 'false',
    });

    User.associate = (db) => {
        // User.hasMany(db.BlogPost, { as: 'blogPost', foreignKey: 'userId' })
    };

    return User;
};

module.exports = createUserModel;