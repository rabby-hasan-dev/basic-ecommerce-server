import { Schema, model } from 'mongoose';
import {
  Inventory,
  Products,
  ProductsModel,
  Variants,
} from './products.interface';

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

const ProductSchema = new Schema<Products, ProductsModel>({
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

//  create custom static method

ProductSchema.statics.isProductExists = async function (id: string) {
  const existingProduct = await Product.findById(id);

  return existingProduct;
};

//  create Product Mongoose  model

export const Product = model<Products, ProductsModel>('Product', ProductSchema);
