import { z } from 'zod';

// Define the VariantValidationSchema in Zod

const VariantValidationSchema = z.object({
  type: z.string().trim().min(1, 'type is required'),
  value: z.string().trim().min(1, 'value is required'),
});

// Define the InventoryValidationSchema in Zod

const InventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('quantity must be a non-negative number'),
  inStock: z.boolean(),
});

// Define the ProductSchema in Zod

const ProductValidationSchema = z.object({
  name: z.string().trim().min(1, 'name is required'),
  description: z.string().trim().min(1, 'description is required'),
  price: z.number().nonnegative('price must be a non-negative number'),
  category: z.string().trim().min(1, 'category is required'),
  tags: z.array(z.string().trim().min(1, 'tag cannot be empty')),
  variants: z.array(VariantValidationSchema).min(1, 'variants is required'),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;
