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
            type: dataTypes.INTEGER,
            allowNull: false
          },
    };
    let config = {
        tableName: 'user_cards',
        timestamps: false
    };
    const User_card = sequelize.define(alias,cols, config)

    User_card.associate = function (models) {
      User_card.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id"
      })
    }

    return User_card
}