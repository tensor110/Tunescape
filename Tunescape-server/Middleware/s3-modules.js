const S3 =require('aws-sdk/clients/s3');//IMPORTING THE AWS-SDK , WHERE WE CAN USE S3 FILES
const axios =require('axios')
require('dotenv').config();//TO PROTECT KEYS


const fs=require('fs');


const bucketName=ABANDONED;
const region =ABANDONED;
const accessKeyId=ABANDONED;
const secretAccessKey=ABANDONED;

console.log("bucket name = "+bucketName)
const s3= new S3({
    region,
    accessKeyId,
    secretAccessKey 
});//CREATING A NEW INSTANCE OF S3 OBJECT,WHICH IS REQUIRED DURING FETCHING REQUEST.


//Function to uplaod a file from express server to s3 bucket


const uploadMusicToS3=(file)=>{
    const fileStream=fs.createReadStream(file.path)

    const uploadParams={
        Bucket:bucketName,
        Body:fileStream,
        Key:file.filename,
        ContentType: 'audio/mpeg'
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

const UploadPicturesToS3=(file)=>{
    const fileStream=fs.createReadStream(file.path)

    const uploadParams={
        Bucket:bucketName,
        Body:fileStream,
        Key:file.filename,
        ContentType: 'image/jpeg'
    }
    return s3.upload(uploadParams).promise()
}



module.exports={uploadMusicToS3,downloadfromS3,UploadPicturesToS3};