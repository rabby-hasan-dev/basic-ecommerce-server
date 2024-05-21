import { Products } from './products.interface';
import { Product } from './products.model';

const createPrductIntoDB = async (product: Products) => {
  const result = await Product.create(product);
  return result;
};

export const productService = {
  createPrductIntoDB,
};
