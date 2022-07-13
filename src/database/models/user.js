'use strict';

const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,

        },
        displayName: DataTypes.STRINGS,
        email: DataTypes.STRINGS,
        password: DataTypes.STRINGS,
        image: DataTypes.STRINGS,
    }, {
        //options - opcional
        tableName: 'Users',
        timestamps: 'false',
    });

    User.associate = (db) => {
        User.hasMany(db.BlogPost, { as: 'blogPost', foreignKey: 'userId' })
    };

    return User;
};

module.exports = User;