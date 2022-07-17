module.exports = (sequelize,dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          category_name: {
            type: dataTypes.STRING(100),
            allowNull: false
          }
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const Role = sequelize.define(alias,cols, config)

    return Role
}