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
          Invoice_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
    };
    let config = {
        tableName: 'invoice',
        timestamps: false
    };
    const Invoice = sequelize.define(alias,cols, config)

    Invoice.associate = function (models) {
      Invoice.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id"
      })

      Invoice.belongsTo(models.Purchase, {
        as: "purchases",
        foreignKey: "purchase_id"
      })

      Invoice.hasMany(models.Invoice_detail, {
        as: "invoice_detail",
        foreignKey: "invoice_id"
      })

    }

    return Invoice
}