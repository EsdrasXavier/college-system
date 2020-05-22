const { Model, DataTypes } = require('sequelize');


class Registration extends Model {
  static init(sequelize) {
    super.init({
      status: DataTypes.STRING
    }, {
      tableName: 'registration',
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Person, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Registration;