/* jshint indent: 2 */

forward.$inject = ['db', 'Sequelize'];
export default function forward(sequelize, DataTypes) {
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
    createdAt: false,
    updatedAt: false
  });
};
