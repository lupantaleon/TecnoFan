module.exports = (sequelize,dataTypes) => {
    let alias = 'Product_cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
    };
    let config = {
        tableName: 'products_cart',
        timestamps: false
    };
    const Product_cart = sequelize.define(alias,cols, config)

    return Product_cart
}