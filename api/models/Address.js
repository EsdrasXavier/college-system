const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      number: DataTypes.INTEGER,
      street: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      zipcode: DataTypes.STRING,
    }, {
      tableName: 'addresses',
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Person, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Address;