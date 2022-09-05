module.exports = (sequelize,dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          category_name: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          category_image: {
            type: dataTypes.STRING(200),
            allowNull: false
          },
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const Category = sequelize.define(alias,cols, config)

    Category.associate = function (models) {
      Category.hasMany(models.Product, {
        as: "products",
        foreignKey: "category_id"
      })
    }

    return Category
}