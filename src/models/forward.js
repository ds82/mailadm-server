/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forward', {
    destination: {
      type: 'ARRAY',
      allowNull: true
    },
    enable_policyd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    enable_greylisting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'forward'
  });
};
