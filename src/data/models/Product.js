module.exports = (sequelize,dataTypes) => {
    let alias = 'Product';
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
          brand: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          price: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          discount: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          description: {
            type: dataTypes.STRING(500),
            allowNull: false
          },
          stock: {
            type: dataTypes.TINYINT(),
            allowNull: false
          },
          category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias,cols, config)

    Product.associate = function (models) {
      Product.belongsTo(models.Category, {
        as: "categories",
        foreignKey: "category_id"
      })
  
      Product.hasMany(models.Invoice_detail, {
        as: "invoice_detail",
        foreignKey: "product_id"
      })
  
      Product.hasMany(models.Product_image, {
        as: "product_images",
        foreignKey: "product_id"
      })
  
      Product.hasMany(models.Product_financing, {
        as: "product_financing",
        foreignKey: "product_id"
      })
  
      Product.hasMany(models.Product_cart, {
        as: "products_cart",
        foreignKey: "product_id"
      })
  
    }

    return Product
}