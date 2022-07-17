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
            type: dataTypes.INT(),
            allowNull: false
          },
          discount: {
            type: dataTypes.INT(),
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
            type: dataTypes.INT(),
            allowNull: false
          },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}