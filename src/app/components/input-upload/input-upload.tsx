import { useState } from 'react';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileInput = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Selecione um arquivo primeiro!");

    // Solicita uma URL assinada
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName: selectedFile.name,
        fileType: selectedFile.type,
      }),
    });

    const { uploadURL } = await res.json();

    // Faz o upload direto para a URL assinada
    await fetch(uploadURL, {
      method: 'PUT',
      headers: {
        'Content-Type': selectedFile.type,
      },
      body: selectedFile,
    });

    alert("Upload realizado com sucesso!");
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={handleUpload}>Upload para S3</button>
    </div>
  );
};

export default UploadComponent;
