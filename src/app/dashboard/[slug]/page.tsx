"use client";
import style from "./dashboard.module.css";
import FooterSection from "../../components/sections/footer/footer";
import Loading from "../../components/loading/loading";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const params = useParams<{ slug: string }>();
  const [isLoading, toggleLoading] = useState(false);

  getInfos(params.slug);

  async function getInfos(slug: string) {
    try {
      const form = new FormData();
      form.append("slug", slug);

      await fetch(`/api/dashboard`, {
        method: "POST",
        body: form
      });
  
     }catch (e: any) {
      console.log(e);
    } finally {
      toggleLoading(false);
    }
  }

  return (
    <>
      <main className={style.dashboard}>
        <header className={style.header}>
          <h1 className="title">Resumo suas operações</h1>
        </header>

        <section>
          <div id={style.aside} className={style.container}>
            <div className={style.box}>
              <span className="text">quantidade de trades feitas</span>

              <span className={style.value}>13K</span>
            </div>

            <div className={style.box}>
              <span className="text">quantidade de taxa paga</span>

              <span className={style.value}>R$ 1</span>
            </div>

            <div className={style.box}>
              <span className="text">volume de dinheiro movimentado</span>

              <span className={style.value}>R$ 1</span>
            </div>
          </div>

          <div id={style.container}>
            <div className={style.list}>
              <span className="text">Quais moedas mais deram lucro</span>

              <ul>
                <li>
                  SOLUSDT <strong>120%</strong>
                </li>
                <li>
                  ETHBRL <strong>120%</strong>
                </li>
                <li>
                  SOLBRL <strong>120%</strong>
                </li>
              </ul>
            </div>

            <div className={style.list}>
              <span className="text">Quais moedas mais deram prejuizo</span>

              <ul>
                <li>
                  SOLUSDT <strong>120%</strong>
                </li>
                <li>
                  ETHBRL <strong>120%</strong>
                </li>
                <li>
                  SOLBRL <strong>120%</strong>
                </li>
              </ul>
            </div>
          </div>

          <div id={style.rule} className={style.container}>
            <div className={style.box}>
              <span className="text">
                Com base no extrato submetido, você não tem a necessidade de
                declarar as suas criptos no imposto de renda, pois a suas vendas
                não superam 35 mil reais dentro de um mês.
              </span>
            </div>
          </div>
        </section>
        { isLoading ? <Loading /> : ""}
      </main>
      <FooterSection />
    </>
  );
}
