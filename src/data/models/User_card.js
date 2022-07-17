module.exports = (sequelize,dataTypes) => {
    let alias = 'User_card';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.STRING(45),
            allowNull: false
          },
          user_id: {
            type: dataTypes.INT(),
            allowNull: false
          },
    };
    let config = {
        tableName: 'user_cards',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}