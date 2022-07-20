'use strict';

const createUserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        displayName: {
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    }, {
        //options - opcional
        tableName: 'Users', //nome da tabela
        timestamps: false,
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost, { 
            as: 'blogPost',
            foreignKey: 'userId' 
        });
    };

    return User;
};

module.exports = createUserModel;