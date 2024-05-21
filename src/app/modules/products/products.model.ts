import { Schema, model } from 'mongoose';
import { Inventory, Products, Variants } from './products.interface';

const VariantSchema = new Schema<Variants>({
  type: {
    type: String,
    required: [true, 'type is required'],
    trim: true,
  },
  value: {
    type: String,
    required: [true, 'value is required'],
    trim: true,
  },
});

const InventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, 'quantity is required'],
    trim: true,
  },
  inStock: {
    type: Boolean,
    required: [true, 'inStock is required'],
    trim: true,
  },
});

const ProductSchema = new Schema<Products>({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'description is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'category is required'],
    trim: true,
  },
  tags: {
    type: [String],
    required: [true, 'tags is required'],
  },
  variants: {
    type: [VariantSchema],
    required: [true, 'variants is required'],
  },
  inventory: {
    type: InventorySchema,
    required: [true, 'inventory is required'],
  },
});

//  create Product Mongoose  model

export const Product = model<Products>('Product', ProductSchema);
