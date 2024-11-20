"use client";
// import { useState } from "react";
import style from "./modal-coin-mobile.module.css";

export default function ModalCoinMobile() {
  //   const [open, toggleOpen] = useState(0);
  //   const [currentCoin, setCoin] = useState("");

  function setCoin(coin: string) {console.log(coin)}

  return (
    <>
      <button className={style.button}>Solana</button>

      <div className={style.modal} role="dialog">
        <form>
          <span className="text">Selecione uma moeda</span>
          <input type="text" placeholder="Selecione uma moeda" />
          <ul>
            <li>
              <label onClick={() => setCoin("Solana")} htmlFor="a">
                <input type="radio" id="1" />
                <span className="text active"> Solana </span>
              </label>

              <label onClick={() => setCoin("Solana")} htmlFor="a">
                <input type="radio" id="1" />
                <span className="text active"> Solana </span>
              </label>

              <label onClick={() => setCoin("Solana")} htmlFor="a">
                <input type="radio" id="1" />
                <span className="text active"> Solana </span>
              </label>

              <label onClick={() => setCoin("Solana")} htmlFor="a">
                <input type="radio" id="1" />
                <span className="text active"> Solana </span>
              </label>
            </li>
          </ul>

          <button type="submit">Selecionar</button>
        </form>
      </div>
    </>
  );
}
