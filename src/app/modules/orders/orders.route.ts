import express from 'express';
import { errorhandler } from '../../utilis/errorhandler';
import { orderController } from './orders.controller';

const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getAllOrder);
router.all("*", errorhandler.notFoundRouter)

export const orderRouter = router;
