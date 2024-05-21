import { Products } from './products.interface';
import { Product } from './products.model';

//  send Product data in database
const createPrductIntoDB = async (product: Products) => {
  const result = await Product.create(product);
  return result;
};

// Retrived all product data from database

const getAllPrductIntoDB = async (query: object | null) => {
  if (query) {
    const queryResult = await Product.find(query);
    return queryResult;
  }

  const result = await Product.find({});
  return result;
};

//  find Product by database id
const getProductByIdIntoDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
//  find Product by database id and update product
const getProductByIdAndUpdateIntoDB = async (id: string, data: Products) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

//  find Product by database id
const getProductByIdAndDeleteIntoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createPrductIntoDB,
  getAllPrductIntoDB,
  getProductByIdIntoDB,
  getProductByIdAndDeleteIntoDB,
  getProductByIdAndUpdateIntoDB,
};
