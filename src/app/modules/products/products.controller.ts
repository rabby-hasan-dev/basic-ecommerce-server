import { Request, Response } from 'express';
import { productService } from './products.service';
import ProductValidationSchema from './products.zodValidation';

//  Create Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParseData = ProductValidationSchema.parse(productData);
    const data = await productService.createPrductIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product creation something wrong!',
      error: error,
    });
  }
};

//  Retrieve a List of All Products
const getAllProduct = async (req: Request, res: Response) => {
  try {
    let query = {};
    if (req.query?.searchTerm) {
      query = { category: req.query?.searchTerm };

      const data = await productService.getAllPrductIntoDB(query);

      res.status(200).json({
        success: true,
        message: "Products matching search term 'iphone' fetched successfully!",
        data: data,
      });
    } else {
      const data = await productService.getAllPrductIntoDB(null);

      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: data,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Retrieve faild of all products! ',
      error: error,
    });
  }
};

// Retrieve a Specific Product by ID
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const data = await productService.getProductByIdIntoDB(productId);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Retrieve faild of  a Specific Product! ',
      error: error,
    });
  }
};

// Update Product Information

const getProductByIdAndUpdate = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedata = req.body;
    const zodParseData = ProductValidationSchema.parse(updatedata);
    const data = await productService.getProductByIdAndUpdateIntoDB(
      productId,
      zodParseData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Retrieve faild of  a Specific Product! ',
      error: error,
    });
  }
};

// Retrieve a Specific Product by ID and  Delete a Product
const getProductByIdAndDelete = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const data = await productService.getProductByIdAndDeleteIntoDB(productId);
    if (data) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong! ',
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getProductById,
  getProductByIdAndDelete,
  getProductByIdAndUpdate,
};
