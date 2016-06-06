/* jshint indent: 2 */

transport.$inject = ['db', 'Sequelize'];
export default function transport(sequelize, DataTypes) {
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
    createdAt: false,
    updatedAt: false
  });
};
