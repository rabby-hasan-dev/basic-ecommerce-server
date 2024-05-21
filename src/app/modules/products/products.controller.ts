import { Request, Response } from 'express';
import { productService } from './products.service';

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;

        const data = await productService.createPrductIntoDB(productData);
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

export const productController = {
    createProduct,
};
