import { Inventory } from '../products/products.interface';
import { Product } from '../products/products.model';
import { Orders } from './orders.interface';
import { Order } from './orders.model';

// create order and put in database
const createOrderIntoDB = async (order: Orders) => {

    const existing = await Product.isProductExists(order.productId);


    if (!existing) {
        throw new Error('product is not exists!');
    }
    //  hanover inventory data to inventoryhandller
    innventoryhandler(existing.inventory, order);
    const result = await Order.create(order);
    return result;

};

//  handle inventory and update
const innventoryhandler = async (data: Inventory, order: Orders) => {
    const quantity = data.quantity - order.quantity;
    if (quantity === 0) {
        await Product.updateOne({ $set: { 'inventory.inStock': false } })
    } else if (quantity < 0) {
        throw new Error("stock out")
    } else {
        await Product.updateOne({ $set: { 'inventory.quantity': quantity } })
    }


}

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
