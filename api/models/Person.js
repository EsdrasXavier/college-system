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
    this.hasMany(models.Billing, { foreignKey: 'user_id', as: 'billings' });
    this.hasOne(models.Registration, { foreignKey: 'user_id', as: 'registration' });
    this.hasOne(models.Authority, { foreignKey: 'user_id', as: 'authority' });
  }
}

module.exports = Person;