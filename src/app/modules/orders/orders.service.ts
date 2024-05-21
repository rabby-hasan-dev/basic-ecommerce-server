import { Orders } from './orders.interface';
import { Order } from './orders.model';

// create order and put in database
const createOrderIntoDB = async (order: Orders) => {
  const result = await Order.create(order);
  return result;
};
//  get all order from database
const getAllOrderIntoDB = async () => {
  const result = await Order.find({});
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
};
