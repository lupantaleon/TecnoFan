module.exports = (sequelize,dataTypes) => {
    let alias = 'Product_financing';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          installment_amount: {
            type: dataTypes.MEDIUMINT(),
            allowNull: false
          },
          number_of_installments: {
            type: dataTypes.TINYINT(),
            allowNull: false
          },
          product_id: {
            type: dataTypes.INT(),
            allowNull: false
          },

    };
    let config = {
        tableName: 'product_financing',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}