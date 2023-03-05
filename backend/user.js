const { DataTypes } = require('sequelize-cockroachdb');
const bcrypt = require('bcrypt');
const { sequelize } = require('./conn');


const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  },
  email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedValue = bcrypt.hashSync(value, 10);
      this.setDataValue('email_id', hashedValue);
    }
  },
  credential: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  preferences: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
});

// Create the table if it doesn't exist
User.sync();

module.exports = User;