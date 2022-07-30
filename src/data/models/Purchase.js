module.exports = (sequelize,dataTypes) => {
    let alias = 'Purchase';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          purchase_date: {
            type: dataTypes.DATE(),
            allowNull: false
          },
          user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
    };
    let config = {
        tableName: 'purchases',
        timestamps: false
    };
    const Purchase = sequelize.define(alias,cols, config)

    Purchase.associate = function (models) {
      Purchase.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id"
      })

      Purchase.hasOne(models.Invoice, {
        as: "invoices",
        foreignKey: "purchase_id"
      })
    }

    return Purchase
}