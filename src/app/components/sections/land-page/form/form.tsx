"use client";

import styles from "./form.module.css";

import button from "../../../../style/button.module.css";
import input from "../../../../style/input.module.css";
import Loading from "../../../loading/loading";

import { useEffect, useState } from "react";
import DialogSuccess from "@/app/components/dialog-success/dialog-success";
import DialogError from "@/app/components/dialog-error/dialog-error";

export function Form() {
  const [dialogSuccess, toggleDialogSuccess] = useState(false);
  const [dialogError, toggleDialogError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, toggleLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    file: "",
  });

  useEffect(() => {
    const isComplete = formData.email.trim() !== "" && !!formData.file;

    setIsFormValid(isComplete);
  }, [formData, isFormValid]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const handleFileInput = (event: any) => {
    const newFormData = { ...formData, file: event.target.files[0] };
    setFormData(newFormData);
  };

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();

    const body = new FormData();
    body.append("file", formData.file);
    body.append("email", formData.email);

    try {
      toggleLoading(true);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: body,
      });

      await res.json();

      toggleDialogError(false);
      toggleDialogSuccess(true);
    } catch (e: any) {
      console.log(e);
      toggleDialogError(true);
    } finally {
      toggleLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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

      <label htmlFor="file">
        <input
          type="file"
          className={input.file}
          accept=".csv"
          id="file"
          name="file"
          required
          onChange={handleFileInput}
        />
        <span role="button" className={button.button}>
          Upload do extrato
        </span>
      </label>

      <button type="submit" disabled={!isFormValid} className={button.button}>
        Enviar
      </button>

      <legend>
        Por enquanto funcionamos apenas com o formato de extrato da bynance.
      </legend>

      {isLoading ? <Loading /> : ""}
      {dialogSuccess ? <DialogSuccess /> : ""}
      {dialogError ? <DialogError /> : ""}
    </form>
  );
}
