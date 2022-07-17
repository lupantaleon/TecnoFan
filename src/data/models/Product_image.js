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
            type: dataTypes.INT(),
            allowNull: false
          },

    };
    let config = {
        tableName: 'product_images',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}