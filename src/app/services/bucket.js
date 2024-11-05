/* eslint-disable @typescript-eslint/no-unused-vars */
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";

async function uploadFile(fileStream, Key) {
  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const uploadParams = {
    Key,
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    ContentType: "text/csv",
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log("Upload realizado com sucesso:", data);
  } catch (error) {
    console.error("Erro ao fazer upload:", error);
  }
}

export async function getFile(Key) {
  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const input = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key,
  };

  const command = new GetObjectCommand(input);

  try {
    const response = await s3Client.send(command);
    console.log("Download realizado com sucesso");
    return response;
  } catch (error) {
    console.error("Erro ao fazer upload:", error);
  }
}

export default uploadFile;
