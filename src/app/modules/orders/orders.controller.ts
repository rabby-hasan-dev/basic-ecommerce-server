import { Request, Response } from 'express';
import { orderService } from './orders.service';
import OrdersValidationSchema from './orders.zodValidation';

//  create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParseData = OrdersValidationSchema.parse(orderData);
    const data = await orderService.createOrderIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || ' something went wrong',
      error: error,
    });
  }
};

// Retrived order
const getAllOrder = async (req: Request, res: Response) => {
  try {
    let query = {};
    if (req.query?.email) {
      query = { email: req.query?.email };
      const data = await orderService.getAllOrderIntoDB(query);
      res.status(200).json({
        success: true,
        message: 'Order fetchs successfully!',
        data: data,
      });
    } else {
      const data = await orderService.getAllOrderIntoDB(null);
      res.status(200).json({
        success: true,
        message: 'Order fetchs successfully!',
        data: data,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'order fetch  something wrong!',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
