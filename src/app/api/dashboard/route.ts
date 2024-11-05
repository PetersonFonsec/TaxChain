
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getFile } from "@/app/services/bucket";
import { getInDynamoDb } from "@/app/services/db";
import { parse } from "papaparse";

export async function POST(req: Request) {
  const formData = await req.formData();
  const slug = formData.get("slug") as string;

  try {
    const result = await getInDynamoDb(slug);
    const item = result.Item?.fileHash ?? ""
    if (!item) {
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
    const csvString = await csv?.transformToString();

    const resultCSV = parse(csvString as string, {
      header: true,
      skipEmptyLines: true,
    });

    return Response.json(resultCSV,
      {
        status: 200,
      }
    );

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
}