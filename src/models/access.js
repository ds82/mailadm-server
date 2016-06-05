/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('access', {
    action: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'access'
  });
};
