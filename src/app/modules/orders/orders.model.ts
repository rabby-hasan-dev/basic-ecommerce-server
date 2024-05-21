import { Schema, model } from "mongoose";
import { Orders } from "./orders.interface";




const OrdersSchema = new Schema<Orders>({
    email: {
        type: String,
        required: true,
        trim: true
    },
    productId: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    }
})

//  Order mongose model
export const Order = model<Orders>('Order', OrdersSchema);