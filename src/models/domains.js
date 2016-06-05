/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('domains', {
    parent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'domains'
  });
};
