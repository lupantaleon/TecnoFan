module.exports = (sequelize,dataTypes) => {
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          role_name: {
            type: dataTypes.STRING(100),
            allowNull: false
          }
    };
    let config = {
        tableName: 'roles',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    Role.associate = function (models) {
      Role.hasMany(models.User, {
        as: "users",
        foreignKey: "role_id"
      })
    }

    return Role
}