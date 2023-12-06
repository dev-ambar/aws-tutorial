const { S3Client, GetObjectCommand} =  require("@aws-sdk/client-s3");
const  { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3client = new S3Client({

    region: "ap-south-1",
    credentials:{
     accessKeyId: 'AKIAXUYZEH7MX3AKMPMX',
     secretAccessKey: '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'   
    },

});

async function getObjectURL(key)
{ 
    const command = new GetObjectCommand({
        Bucket: 'ambaraws-private',
        Key: key,
    });

    const url =  await getSignedUrl(s3client,command,{expiresIn:20})
    return url;

}

async function init(){
    console.log("Presigned URL for image jbstayfocusedinterview6.jpg", await getObjectURL("temp1/jbstayfocusedinterview6.jpg"));
}

init();

