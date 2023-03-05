const { Sequelize, DataTypes } = require('sequelize-cockroachdb');


const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  restaurant_name: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customer_phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id : {
    type : DataTypes.STRING,
    allowNull : false
  }
});

Order.sync({ force: false }).then(() => {
  console.log('Orders table created');
});

module.exports = { Order };