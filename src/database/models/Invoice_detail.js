module.exports = (sequelize, dataTypes) => {
  let alias = 'Invoice_detail';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    invoice_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    number_of_installments: {
      type: dataTypes.TINYINT(),
      allowNull: false
    },
    installment_amount: {
      type: dataTypes.SMALLINT(),
      allowNull: false
    },
    products_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

  };
  let config = {
    tableName: 'invoice_detail',
    timestamps: false
  };
  const Invoice_detail = sequelize.define(alias, cols, config)

  Invoice_detail.associate = function (models) {
    Invoice_detail.belongsTo(models.Product, {
      as: "products",
      foreignKey: "products_id"
    })

    Invoice_detail.belongsTo(models.Invoice, {
      as: "invoice",
      foreignKey: "invoice_id"
    })
  }

  return Invoice_detail
}