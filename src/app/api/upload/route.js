import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';

// Configura o S3
const s3 = new S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },

  region: process.env.AWS_REGION
});

export default async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { fileName, fileType } = req.body;

    // Configura o S3 com as informações do arquivo
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,   // Nome do bucket S3
      Key: `uploads/${fileName}`,            // Caminho e nome do arquivo no S3
      Expires: 60,                           // Expira em 60 segundos
      ContentType: fileType,                 // Tipo do conteúdo (ex: 'text/csv' para arquivos CSV)
      ACL: 'public-read'                     // Permissões de leitura pública
    };

    // Obtém uma URL assinada do S3 para upload direto
    const uploadURL = await getSignedUrl(s3, new PutObjectCommand(params), {
      expiresIn: 1000 * 60 //   '/* add value from \'Expires\' from v2 call if present, else remove */'
    });

    res.status(200).json({ uploadURL });
  } catch (error) {
    console.error("Erro ao gerar a URL de upload: ", error);
    res.status(500).json({ message: 'Erro ao gerar a URL de upload', error });
  }
}

export async function GET() {
    return Response.json({
        message: "TESTES "
    })
}