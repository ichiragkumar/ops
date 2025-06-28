import { OrderModel } from "../models/order.model"




export const createOrder = async(productId : string, quantity :number) =>{

    const orderDocument = new OrderModel({productId,  quantity})
    orderDocument.save()
    return orderDocument
}