import {sns} from "../config/aws"
import { EVENT_TYPE } from "../config/Types"

const  topicArn  = process.env.SNS_ORDER_TOPIC_ARN!

export const publishOrderEvent = async (orderId :string, productId: string, quantity : number) => {
    if(!topicArn){
        throw new Error("SNS_ORDER_TOPIC_ARN is missing")
    }

    const message = {
        orderId,
        productId,
        quantity,
        eventType:EVENT_TYPE.ORDER_CREATED
    }


    const params = {
        Message : JSON.stringify(message),
        TopicArn: topicArn
    }


    await sns.publish(params).promise()
    console.log('Order created event published to SNS');

}
