import { Product } from '../products/products.model';
import { Orders } from './orders.interface';
import { Order } from './orders.model';

// create order and put in database
const createOrderIntoDB = async (order: Orders) => {
  const existing = await Product.isProductExists(order.productId);

  if (!existing) {
    throw new Error('product is not exists!');
  }
  const result = await Order.create(order);
  return result;
};

//  get all order from database
const getAllOrderIntoDB = async (query: object | null) => {
  if (query) {
    const result = await Order.find(query);
    return result;
  } else {
    const result = await Order.find({});
    return result;
  }
};

export const orderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
};
