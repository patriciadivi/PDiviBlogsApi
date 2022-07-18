'use strict';

//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').Sequelize } sequelize
 * @param {import ('sequelize').DataTypes} DataTypes
 */


const createCategorieModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    },{
        tableName: 'Categories',
        timestamps: false,
    })

    Category.associate = (db) => {
        Category.hasMany(db.PostCategorie, { as: 'PostCategories', foreignKey: 'categoryId' })
    };

    return Category;
};

module.exports = createCategorieModel;