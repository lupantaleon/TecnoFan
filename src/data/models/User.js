module.exports = (sequelize,dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name_and_surename: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          password: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          email: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          country: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          address: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          phone: {
            type: dataTypes.STRING(45),
            allowNull: false
          },
          image: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          role_id: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias,cols, config)

    return User
}