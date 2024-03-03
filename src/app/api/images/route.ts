import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/app/lib/db";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import Images from "@/app/lib/imageSchema";

// const s3Client = new S3Client({
//   region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
//   credentials: {
//     accessKeyId: `${process.env.NEXT_AWS_S3_ACCESS_KEY_ID}`,
//     secretAccessKey: `${process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY}`,
//   },
// });

// async function uploadFileToS3(file: File, fileName: string) {
//   const fileBuffer = file;
//   console.log(fileName);

//   const params = {
//     Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
//     Key: `${fileName}`,
//     Body: fileBuffer,
//     ContentType: "image/jpg",
//   };

//   const command = new PutObjectCommand(params);

//   await s3Client.send(command);

//   return fileName;
// }

export async function GET() {
  await connectMongo()

  const images = await Images.find({}).sort({_id: -1})
  return NextResponse.json(images, {status: 201})
}

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get("file");

//     if (!file) {
//       return NextResponse.json({ error: "File is required" }, { status: 400 });
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());
//     const fileName = await uploadFileToS3(buffer, file.name);

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Error uploading file" });
//   }
// }

