


import  { Router } from "express"
import { createOrder } from "../services/order.service";


const router = Router()



router.post("/", async (req , res) =>{
    const { productId, quantity} = req.body;

    if(!productId || !quantity ){
        res.status(400).json({
            msg:"Product or Quantity is missing"
        })
    }

    const order = await createOrder(productId, quantity)

    res.status(201).json({
        msg:"Order Created SuccessFully",
        data:order
    })


})


export default router