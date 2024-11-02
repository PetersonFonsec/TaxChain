import styles from "./about.module.css";
import FaqItem from "../../faq-item/faq-item";

export default function AboutSection() {
  return (
    <>
      <section className={styles.about}>
          <h2 className={styles.title}>Perguntas Frequentes</h2>

          <ol className={styles.aboutList}>
            <FaqItem index={1} question="O que é TaxChain e como funciona ?">
              <span>
                A <strong>Taxchain </strong> é uma plataforma criada para te auxiliar, fornecendo 
                uma visão resumida sobre as suas transações na Binance com base no extrato de histórico 
                fornecido pela própria corretora. <br/>  <br/>

                O arquivo no formato CSV fornecido pela Binance não contém nenhum dado sigiloso, apenas
                com os dados do CSV não é possível te identificar, prezando assim pelo anonimato 
              </span>
            </FaqItem>

            <FaqItem index={2} question="Como baixar o extrato de histórico da Binance ?">
              <span>
                No site da <strong>Binance</strong> dentro da sessão de <strong>FAQ - Perguntas Frequentes </strong>
                é possível encontrar suporte.
                <br/>  <br/>
                <a target="_blank" href="https://www.binance.com/pt-BR/support/faq/como-baixar-o-extrato-de-hist%C3%B3rico-de-transa%C3%A7%C3%A3o-no-trading-spot-e4ff64f2533f4d23a0b3f8f17f510eab">
                  Como baixar o extrato de histórico de transação no trading spot?
                </a>
              </span>
            </FaqItem>

            <FaqItem index={3} question="O que é criptomoedas ?">
              <span>
                As corretoras de <strong>criptomoedas</strong> são mercados digitais que permitem aos usuários comprar e vender criptomoedas como o <strong>Bitcoin</strong>, <strong>Ethereum</strong> e <strong>Tether</strong>. 
                A corretora Binance é a maior corretora de criptomoedas por volume de trades.
              </span>
            </FaqItem>

            <FaqItem index={4} question="O que é uma corretora de criptomoedas ?">
              <span>
                As corretoras de <strong>criptomoedas</strong> são mercados digitais que permitem aos usuários comprar e vender criptomoedas como o <strong>Bitcoin</strong>, <strong>Ethereum</strong> e <strong>Tether</strong>. 
                A corretora Binance é a maior corretora de criptomoedas por volume de trades.
              </span>
            </FaqItem>
          </ol>
        </section>
    </>
  );
}
