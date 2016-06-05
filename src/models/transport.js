/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transport', {
    transport: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'transport'
  });
};
