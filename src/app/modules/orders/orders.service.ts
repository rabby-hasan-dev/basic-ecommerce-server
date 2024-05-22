import { Products } from '../products/products.interface';
import { Product } from '../products/products.model';
import { Orders } from './orders.interface';
import { Order } from './orders.model';

// create order and put in database
const createOrderIntoDB = async (order: Orders) => {
  const existing = await Product.isProductExists(order.productId);

  if (!existing) {
    throw new Error('Product does not exist!');
  }

  // Hand over inventory data to inventoryhandler
  await innventoryhandler(existing, order);
  const result = await Order.create(order);
  return result;
};

// Handle inventory and update
const innventoryhandler = async (data: Products, order: Orders) => {
  const { _id, inventory } = data;
  const quantity = inventory.quantity - order.quantity;
  if (quantity === 0) {
    await Product.updateOne(
      { _id: _id },
      { $set: { 'inventory.quantity': quantity, 'inventory.inStock': false } },
    );
  } else if (quantity < 0) {
    throw new Error('Insufficient quantity available in inventory');
  } else {
    await Product.updateOne(
      { _id: _id },
      { $set: { 'inventory.quantity': quantity } },
    );
  }
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
