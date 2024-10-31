/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'fs';

import {
    S3Client,
    PutObjectCommand,
} from "@aws-sdk/client-s3";
import { NextResponse } from 'next/server';

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

async function handler(req, res) {
    console.log(filePath.getDestination())
    const bucketName = process.env.AWS_BUCKET_NAME;
    return NextResponse.json({ msg: "DEU BOM"})
    // uploadFile(filePath, bucketName, fileName);
}

export { handler as POST}
