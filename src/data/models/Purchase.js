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

    return Purchase
}