const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

// Função para fazer o upload do arquivo
async function uploadFile(filePath, bucketName, key) {
    // Cria uma stream de leitura do arquivo (caso esteja rodando no Node.js)
    const fileStream = fs.createReadStream(filePath);
  
    // Define os parâmetros de upload
    const uploadParams = {
      Bucket: bucketName,
      Key: key,             // Caminho e nome desejado no bucket
      Body: fileStream,     // Conteúdo do arquivo (a stream)
      ContentType: "text/csv", // Tipo do conteúdo (ex.: 'text/csv' para arquivos CSV)
    };
  
    // Executa o comando de upload
    try {
      const data = await s3Client.send(new PutObjectCommand(uploadParams));
      console.log("Upload realizado com sucesso:", data);
    } catch (error) {
      console.error("Erro ao fazer upload:", error);
    }
}

export default uploadFile;