const { Model, DataTypes } = require('sequelize');


class Person extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      tableName: 'person',
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
  }
}

module.exports = Person;