const { twilioCall } = require('../helper/twilio');
const { Order } = require('../models/orders');

async function createOrder(req, res) {
  const { restaurant_name, price , customer_name ,  customer_phone , user_id } = req.body;

  try {
    const order = await Order.create({
       restaurant_name, price , customer_name ,  customer_phone , user_id  
    });
    console.log(order)
    twilioCall(customer_name , order.id , price , customer_phone)
    return res.status(201).json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getOrderDetails(req, res) {
  const { orderId } = req.body;

  try {
    const order = await Order.findOne({ where: { id: orderId } });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { createOrder, getOrderDetails };