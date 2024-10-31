"use client"

import styles from "./form.module.css";

import button from "../../../../style/button.module.css";
import input from "../../../../style/input.module.css";
import UploadComponent from "../../../input-upload/input-upload";

export function Form() {
    return (
    <div role="form" className={styles.form}>
        <h2>Informe seu contato</h2>
        
        <label htmlFor="email">
          <input className={input.input} id="email" placeholder="E-mail" type="text" />
        </label>

        <label htmlFor="celphone">
          <input className={input.input} id="celphone" placeholder="Telefone" type="text" />
        </label>

        <button className={button.button}>Upload do extrato</button>

        <legend>Por enquanto funcionamos apenas com o formato de extrato da bynance.</legend>
        <UploadComponent />
      </div>
    )
}