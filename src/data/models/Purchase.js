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
            type: dataTypes.INT(),
            allowNull: false
          },
    };
    let config = {
        tableName: 'purchases',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}