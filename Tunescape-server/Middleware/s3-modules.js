const S3 =require('aws-sdk/clients/s3');//IMPORTING THE AWS-SDK , WHERE WE CAN USE S3 FILES

require('dotenv').config();//TO PROTECT KEYS

const fs=require('fs');


const bucketName=process.env.AWS_BUCKET_NAME;
const region =process.env.AWS_BUCKET_REGION;
const accessKeyId=process.env.AWS_ACCESS_KEY;
const secretAccessKey=process.env.AWS_SECRET_KEY;

const s3= new S3({
    region,
    accessKeyId,
    secretAccessKey
});//CREATING A NEW INSTANCE OF S3 OBJECT,WHICH IS REQUIRED DURING FETCHING REQUEST.


//Function to uplaod a file from express server to s3 bucket


const uploadToS3=(file)=>{
    const fileStream=fs.createReadStream(file.path)

    const uploadParams={
        Bucket:bucketName,
        Body:fileStream,
        Key:file.filename
    }

    return s3.upload(uploadParams).promise()
}


//function to downlaod a file from S3 bucket to Express server

const downloadfromS3=(key)=>{
    

    const downloadParams={
        Bucket:bucketName,
        Key:key
    }
    return s3.getObject(downloadParams).createReadStream();
}


module.exports={uploadToS3,downloadfromS3};
