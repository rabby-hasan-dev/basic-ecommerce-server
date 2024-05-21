import { z } from 'zod';

const OrdersValidationSchema = z.object({
  email: z.string().trim(),
  productId: z.string().trim(),
  price: z.number(),
  quantity: z.number(),
});

export default OrdersValidationSchema;
