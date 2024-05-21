import express from 'express';
import { productController } from './products.controller';
const router = express.Router();

router.post('/', productController.createProduct);
router.get('/');

export const productRouter = router;
