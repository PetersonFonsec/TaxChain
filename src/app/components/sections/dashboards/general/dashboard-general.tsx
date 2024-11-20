"use client";

import style from "./general.module.css";

import Box from "@/app/components/box/box";
// import { DashboardResponse } from "@/app/model/DasboardResponse";
import ChartBar from "@/app/components/chart-bar/chart-bar";
import PieAnimation from "@/app/components/chart-donuts/chart-donuts";

// interface DashboardGeneral {
//   resume: DashboardResponse;
// }

export default function DashboardGeral() {
  return (
    <section id={style.general}>
      <div className={style.box}>
        <Box title="Valor depositado">
          <strong>R$ 22</strong>
        </Box>
      </div>

      <div className={style.box}>
        <Box title="A soma de todas as compras">
          <strong>R$ 22</strong>
        </Box>
      </div>

      <div className={style.box}>
        <Box title="Quantidade de trades">
          <strong>R$ 22</strong>
        </Box>
      </div>

      <div className={style.box}>
        <Box title="A soma de todas as vendas">
          <strong>R$ 22</strong>
        </Box>
      </div>

      <div className={style.box2}>
        <Box title="Moedas mais movimentada">
          <strong>Solana</strong>
        </Box>
      </div>

      <div className={style.box4 + " container"}>
        <span className="text">Movimentações Feitas</span>
        <div style={{ height: "300px", width: "100%" }}>
          <ChartBar />
        </div>
      </div>

      <div className={style.box2 + " container"}>
        <span className="text">Composisão atual da sua carteira </span>
        <div style={{ height: "300px", width: "100%" }}>
          <PieAnimation />
        </div>
      </div>

      <div className={style.box4 + " container"}>
        <span className="text">Dica</span>
        <p className="text">
          Desde 2024 toda venda de criptomoedas feitas em exchanges estrangeiras
          são tributados em 15% em cima de todo lucro obtido, enquanto para
          exchanges nacionais vendas de até 35 mil reais no mês não é
          tributávelDesde 2024 toda venda de criptomoedas feitas em exchanges
          estrangeiras são tributados em 15% em cima de todo lucro obtido,
          enquanto para exchanges nacionais vendas de até 35 mil reais no mês
          não é tributável
        </p>
      </div>

      <div className={style.box2 + " container"}>
        <span className="text">Observação</span>
        <p className="text">
          Procure um contador especializado em cripto antes de fazer a sua
          declaração de imposto de renda, nosso objetivo é apenas auxiliar e não
          substituir um profissional especializado
        </p>
      </div>

      <div className={style.box4 + " container"}>
        <span className="text">Dica</span>
        <p className="text">
          No mês de <strong>Junho</strong> a soma das suas vendas utrapassou o
          valor de 35 mil reais o que significa que é importante que você tenha
          feito o <strong>GCAP</strong>
        </p>
      </div>

      <div className={style.box4 + " container"}>
        <span className="text">Dica</span>
        <p className="text">
          Gostou da analise que fizemos para você de graça ? Adoraríamos ouvir o
          que você tem a dizer acesse o nosso
          <a
            className="active"
            href="https://forms.gle/SaY1z29QficQ6Vas5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forms
          </a>
        </p>
      </div>
    </section>
  );
}
