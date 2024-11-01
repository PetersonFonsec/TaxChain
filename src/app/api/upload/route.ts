/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";
import uploadFile from "../../services/bucket";
import {insertInDynamoDb} from "../../services/db";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return Response.json(
      {
        msg: "Não foi feito upload do arquivo CSV",
      },
      { status: 420 }
    );
  }

  const buffer = await file.arrayBuffer();
  const id = uuidv4();
  const fileHash = `${id}.csv`;

  uploadFile(Buffer.from(buffer), fileHash);

  await insertInDynamoDb(id, fileHash, formData.get("email"));

  return Response.json(
    {
      msg: "deu bom",
    },
    {
      status: 200,
    }
  );
}
