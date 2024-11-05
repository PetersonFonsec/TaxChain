import { getFile } from "@/app/services/bucket";
import { getInDynamoDb } from "@/app/services/db";

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function POST(req: Request) {
  const formData = await req.formData();
  const slug = formData.get("slug") as string;

  try {
    const result = await getInDynamoDb(slug);
    const item = result.Item?.fileHash ?? ""
    if(!item) {
      return Response.json(
        {
          msg: `Não foi encontrado nenhum arquivo com esse id: ${slug}`,
        },
        {
          status: 404,
        }
      );
    }

    const csv = await getFile(item);
    console.log(csv);
    // csv?.Body

  } catch (e: any) {
    return Response.json(
      {
        msg: `Não foi encontrado nenhum registro com esse id: ${slug}`,
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(
    {
      msg: "deu bom",
    },
    {
      status: 200,
    }
  );
}