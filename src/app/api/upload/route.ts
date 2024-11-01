/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";
import uploadFile from "../../services/bucket";

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
  uploadFile(Buffer.from(buffer), `${uuidv4()}.csv`);

  return Response.json(
    {
      msg: "deu bom",
    },
    {
      status: 200,
    }
  );
}
