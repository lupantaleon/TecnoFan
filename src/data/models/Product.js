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

    return Product
}