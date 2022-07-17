module.exports = (sequelize,dataTypes) => {
    let alias = 'Product_cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          product_id: {
            type: dataTypes.INT(),
            allowNull: false
          },
          user_id: {
            type: dataTypes.INT(),
            allowNull: false
          },
    };
    let config = {
        tableName: 'products_cart',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}