/* jshint indent: 2 */

domains.$inject = ['db', 'Sequelize'];
export default function domains(sequelize, DataTypes) {
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
    createdAt: false,
    updatedAt: false
  });
};
