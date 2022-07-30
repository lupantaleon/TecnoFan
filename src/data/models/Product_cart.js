module.exports = (sequelize, dataTypes) => {
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
      allowNull: false,
    },
    quantity: {
      type: dataTypes.SMALLINT(),
      allowNull: false
    },
  };
  let config = {
    tableName: 'products_cart',
    timestamps: false
  };
  const Product_cart = sequelize.define(alias, cols, config)

  Product_cart.associate = function (models) {
    Product_cart.belongsTo(models.Product, {
      as: "products",
      foreignKey: "product_id"
    })

    Product_cart.belongsTo(models.User, {
      as: "users",
      foreignKey: "user_id"
    })
  }

  return Product_cart
}