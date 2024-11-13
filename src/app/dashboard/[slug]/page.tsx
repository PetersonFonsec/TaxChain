"use client";

import FooterSection from "../../components/sections/footer/footer";
import Loading from "../../components/loading/loading";
import List from "../../components/list/list";
import Box from "../../components/box/box";
import style from "./dashboard.module.css";

import { DashboardResponse } from "@/app/model/DasboardResponse";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const params = useParams<{ slug: string }>();
  const [isLoading, toggleLoading] = useState(false);
  const [resume, setResume] = useState<DashboardResponse>(null as any);

  useEffect(() => {
    getInfos(params.slug);
  }, []);

  async function getInfos(slug: string) {
    const form = new FormData();
    form.append("slug", slug);
    toggleLoading(true);

    fetch(`/api/dashboard`, {
      method: "POST",
      body: form,
    })
      .then(async (e) => {
        toggleLoading(false);
        const result = await e.json();
        setResume(result);
      })
      .catch((e: Response) => {
        toggleLoading(false);
        if (e.status === 404) return window.location.assign("/");
      });
  }

  return (
    <>
      <main className={style.dashboard}>
        <header className={style.header}>
          <h1 className="title">Resumo suas operações</h1>
        </header>

        <section>
          <div id={style.aside} className={style.container}>
            <Box title="quantidade de trades feitas">{resume?.totalTrades}</Box>

            <Box title="Quantidade de rejuizo Total">
              {resume?.lucroPrejuizoTotal.toFixed(2)}
            </Box>

            <Box title="lucroPrejuizoTotal">
              {resume?.maiorPrejuizo.toFixed(2)}
            </Box>
          </div>

          <div id={style.container}>
            <List
              list={resume.taxasTotais}
              title="Quais moedas mais deram lucro"
            />

            <List
              list={resume.taxasTotais}
              title="Quantidade Total de taxas pagas"
            />
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

        {isLoading ? <Loading /> : ""}
      </main>
      <FooterSection />
    </>
  );
}
