const { Model, DataTypes } = require('sequelize');

class Billing extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.FLOAT,
      scholarship_value: DataTypes.FLOAT,
      actual_cost: DataTypes.FLOAT,
      expiration_date: DataTypes.DATE
    }, {
      tableName: 'billing',
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Person, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Billing;