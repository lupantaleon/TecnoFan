module.exports = (sequelize,dataTypes) => {
    let alias = 'Product_image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },

    };
    let config = {
        tableName: 'product_images',
        timestamps: false
    };
    const Product_image = sequelize.define(alias,cols, config)

    Product_image.associate = function (models) {
      Product_image.belongsTo(models.Product, {
        as: "products",
        foreignKey: "product_id"
      })
    }

    return Product_image
}