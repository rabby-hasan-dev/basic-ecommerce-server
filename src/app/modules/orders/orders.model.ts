import { Aggregate, Schema, model } from 'mongoose';
import { Orders } from './orders.interface';

const OrdersSchema = new Schema<Orders>({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  productId: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
});

//  middleware of oreder schema

OrdersSchema.pre('save', function (next) {
  console.log(this);
  Aggregate;

  next();
});

//  Order mongose model
export const Order = model<Orders>('Order', OrdersSchema);
