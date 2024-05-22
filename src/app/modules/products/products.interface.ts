// Products interface

import { Model } from 'mongoose';

export type Variants = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Products = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: Array<Variants>;
  inventory: Inventory;
};

//  static instance model

export interface ProductsModel extends Model<Products> {
  isProductExists(id: string): Promise<Products | null>;
}
