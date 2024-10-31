import { useState } from 'react';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileInput = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Selecione um arquivo primeiro!");

    const formData = new FormData();
    formData.append("file", selectedFile);

    // Solicita uma URL assinada
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    console.log(result);

    alert("Upload realizado com sucesso!");
  };

  return (
    <div>
      <input style={ {"display": "none" }} type="file" onChange={handleFileInput} />
      <button  style={ {"display": "none" }} onClick={handleUpload}>Upload para S3</button>
    </div>
  );
};

export default UploadComponent;
