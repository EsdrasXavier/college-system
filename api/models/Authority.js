const { Model, DataTypes } = require('sequelize');

class Authority extends Model {
  static init(sequelize) {
    super.init({
      authority: DataTypes.STRING
    }, {
      tableName: 'authority',
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Person, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Authority;