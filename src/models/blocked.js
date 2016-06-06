/* jshint indent: 2 */

blocked.$inject = ['db', 'Sequelize'];
export default function blocked(sequelize, DataTypes) {
  return sequelize.define('blocked', {
    action: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'blocked',
    createdAt: false,
    updatedAt: false
  });
};
