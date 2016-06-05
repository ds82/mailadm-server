/* jshint indent: 2 */

users.$inject = ['db', 'Sequelize'];
export default function users(sequelize, DataTypes) {
  return sequelize.define('users', {
    access: {
      type: 'ARRAY',
      allowNull: true
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maildir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domains: {
      type: 'ARRAY',
      allowNull: true
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'users',
    createdAt: false,
    updatedAt: false
  });
};
