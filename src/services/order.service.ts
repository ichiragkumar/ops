import { OrderModel } from "../models/order.model"
import { publishOrderEvent } from "./sns.service"




export const createOrder = async(productId : string, quantity :number) =>{

    const orderDocument = new OrderModel({productId,  quantity})
    orderDocument.save()


   // we save the information
   // and Store it in MongoDB 
   // Publish an event to SNS, just say: "A new order has been created."
   // 1. npm install aws-sdk
   // 2. setup aws config with region, accessKeyId and secretAccessKey
   // and export the new instance of that SNS 


    await publishOrderEvent(orderDocument.id, productId, quantity)
    return orderDocument
}