const S3 =require('aws-sdk/clients/s3');//IMPORTING THE AWS-SDK , WHERE WE CAN USE S3 FILES

require('dotenv').config();//TO PROTECT KEYS


const fs=require('fs');


const bucketName='tunescape';
const region ='ap-south-1';
const accessKeyId='AKIA2QMHNITHVVJK4MTS';
const secretAccessKey='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';

console.log("bucket name = "+bucketName)
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
