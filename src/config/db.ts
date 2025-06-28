
import mongoose from "mongoose"
export const connectToDb = async () =>{

    const MONGODB_URI = process.env.MONGODB_URI!
    if(!MONGODB_URI){
        throw new Error('MONGODB_URI not defined in .env');
    }


    try {
         await mongoose.connect(MONGODB_URI)
         console.log("connected to mongodb successfully")

    } catch (error) {
        
    }
}