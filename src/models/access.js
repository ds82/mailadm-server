/* jshint indent: 2 */

access.$inject = ['db', 'Sequelize'];
export default function access(sequelize, DataTypes) {
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
    createdAt: false,
    updatedAt: false
  });
};
