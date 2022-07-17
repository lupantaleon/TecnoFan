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
            type: dataTypes.INT(),
            allowNull: false
          },
          value: {
            type: dataTypes.INT(),
            allowNull: false
          },
          purchase_id: {
            type: dataTypes.INT(),
            allowNull: false
          },
    };
    let config = {
        tableName: 'invoice',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}