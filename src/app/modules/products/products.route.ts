import express from 'express';
import { productController } from './products.controller';
const router = express.Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProduct);
router.get('/products/:productId', productController.getProductById);
router.put('/products/:productId', productController.getProductByIdAndUpdate);
router.delete(
  '/products/:productId',
  productController.getProductByIdAndDelete,
);

export const productRouter = router;
