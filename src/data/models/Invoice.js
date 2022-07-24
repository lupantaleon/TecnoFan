module.exports = (sequelize,dataTypes) => {
    let alias = 'Invoice';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          date: {
            type: dataTypes.DATE(),
            allowNull: false
          },
          user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          value: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          purchase_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
    };
    let config = {
        tableName: 'invoice',
        timestamps: false
    };
    const Invoice = sequelize.define(alias,cols, config)

    return Invoice
}