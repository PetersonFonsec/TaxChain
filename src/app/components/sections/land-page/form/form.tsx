"use client";

import styles from "./form.module.css";

import button from "../../../../style/button.module.css";
import input from "../../../../style/input.module.css";

import { useState } from "react";

export function Form() {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    file: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    const isComplete = newFormData.email.trim() !== '' && newFormData.phone.trim() !== '';
    setIsFormValid(isComplete);
  };

  const handleFileInput = (event: any) => {
    setSelectedFile(event.target.files[0]);
    handleSubmit();
  };

  const handleSubmit = async (e?: any) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    await res.json();
  };

  return (
    <form onSubmit={handleSubmit}className={styles.form}>
      <h2>Informe seu contato</h2>

      <label htmlFor="email">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          className={input.input}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
      </label>

      <label htmlFor="celphone">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={input.input}
          placeholder="Telefone"
        />
      </label>

      <input
        type="file"
        className={input.file}
        accept=".csv"
        id="file"
        name="file"
        required
        onChange={handleFileInput}
      />

      <button  
        type="submit" 
        onClick={
          () => document.getElementById("file")?.click()  
        }
        disabled={!isFormValid} className={button.button}>
        Upload do extrato
      </button>

      <legend>
        Por enquanto funcionamos apenas com o formato de extrato da bynance.
      </legend>
    </form>
  );
}
