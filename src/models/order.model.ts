
import  { model, Schema } from "mongoose";
import { ORDER_STATUS } from "../config/Types";



interface OrderDocumentInterface extends Document{
    productId : string;
    quantity:number;
    status:ORDER_STATUS
}

const OrderSchema = new Schema<OrderDocumentInterface>({
    productId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:Object.values(ORDER_STATUS)
    }
},{
    timestamps:true
})


export const OrderModel = model<OrderDocumentInterface>("Order", OrderSchema)

