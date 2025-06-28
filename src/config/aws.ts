import AWS from "aws-sdk";


const region = process.env.AWS_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY


if(!region || !accessKeyId || !secretAccessKey){
    throw new Error("region , accessKeyId or secretAccessKey is missing")
}
AWS.config.update({
    region: region,
    accessKeyId : accessKeyId,
    secretAccessKey: secretAccessKey
})

export const sns = new AWS.SNS()