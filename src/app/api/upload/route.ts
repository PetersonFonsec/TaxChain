/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";
import { Resend } from 'resend';
import uploadFile from "../../services/bucket";
import {insertInDynamoDb} from "../../services/db";
import GeneretedDashboard from "../../../../react-email-starter/emails/generated-dashboard";

export async function POST(req: Request) {
  // 1° Recuperando o arquico csv
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const email = formData.get("email") as string;

  if (!file) {
    return Response.json(
      {
        msg: "Não foi feito upload do arquivo CSV",
      },
      { status: 420 }
    );
  }

  // 2° salvando no s3
  const buffer = await file.arrayBuffer();
  const id = uuidv4();
  const fileHash = `${id}.csv`;

  uploadFile(Buffer.from(buffer), fileHash);

  // 3° salvando a relação entre email e arquivo no dynamodb
  await insertInDynamoDb(id, fileHash, email);
  
  // 4° enviando um email com o hash unico
  const resend = new Resend(process.env.EMAIL_TOKEN);
  const link = `${process.env.DOMAIN_URL}/${id}`;

  resend.emails.send({
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
    to:  email,
    subject: 'Seu Dashboard Unico foi gerado!',
    react: GeneretedDashboard({link})
  });
  return Response.json(
    {
      msg: "deu bom",
    },
    {
      status: 200,
    }
  );
}
