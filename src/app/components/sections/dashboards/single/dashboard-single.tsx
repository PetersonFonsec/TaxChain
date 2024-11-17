"use client";

import { DashboardResponse } from "@/app/model/DasboardResponse";
import style from "./single.module.css";
import Box from "@/app/components/box/box";
import { useState } from "react";
import List from "@/app/components/list/list";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

interface DashboardSingle {
  resume: DashboardResponse;
}

export default function DashboardSingle({ resume }: DashboardSingle) {
  const [current, changeTab] = useState(0);

  return (
    <section id={style.single}>
      <div id={style.aside}>
        <ul className={style.container}>
          {resume?.moedasMovimentadas.map((coin, index) => {
            return (
              <li
                key={index}
                onClick={() => changeTab(index)}
                className={current == index ? "active text" : "text"}
              >
                {coin}
              </li>
            );
          })}
        </ul>
      </div>

      <div id={style.container}>
        <div className={style.container}>
          <span className="text">Movimentações Feitas</span>
          <div style={{ height: "300px", width: "100%" }}>
            <BarChart
              sx={(theme) => ({
                [`.${axisClasses.root}`]: {
                  [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                    stroke: "#fff",
                    strokeWidth: 3,
                  },
                  [`.${axisClasses.tickLabel}`]: {
                    fill: "#fff",
                  },
                },
              })}
              series={[
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              slotProps={{
                // Custom loading message
                loadingOverlay: { message: "Buscando os dados necessarios." },
                // Custom message for empty chart
                noDataOverlay: { message: "Não há dados para mostrar." },
              }}
              xAxis={[
                { data: ["Abril", "Março", "maio", "Juno"], scaleType: "band" },
              ]}
              margin={{ top: 10, bottom: 20, left: 0, right: 0 }}
            />
          </div>
        </div>

        <List list={resume.volumeMovimentado} title="Movimentações de Compra" />
        <List list={resume.volumeMovimentado} title="Movimentações de Venda" />

        <div className={style.container}>
          <span className="text">Resumo</span>

          <span className="span text">
            Um total de 20,39 solanas compradas no decorrer do ano. Sendo: 10
            solanas compradas no dia 20/10 custando mil reais 5 solanas
            compradas no dia 20/11 custando mil reais 4,39 solanas compradas no
            dia 20/11 custando mil reais Totalizando 20,39 solana com o preço
            medio de 1000 reais
          </span>
        </div>
      </div>

      <ul id={style.rule}>
        <li>
          <Box className={style.container} title="Valor Médio">
            <strong>13K</strong>
          </Box>
        </li>
        <li>
          <Box className={style.container} title="Moedas Restantes">
            <strong>13K</strong>
          </Box>
        </li>
        <li>
          <Box className={style.container} title="A soma de todas as vendas">
            <strong>13K</strong>
          </Box>
        </li>
        <li>
          <Box className={style.container} title="A soma de todas as compras">
            <strong>13K</strong>
          </Box>
        </li>
      </ul>
    </section>
  );
}
