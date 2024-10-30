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
                As corretoras de <strong>criptomoedas</strong> são mercados digitais que permitem aos usuários comprar e vender criptomoedas como o <strong>Bitcoin</strong>, <strong>Ethereum</strong> e <strong>Tether</strong>. 
                A corretora Binance é a maior corretora de criptomoedas por volume de trades.
              </span>
            </FaqItem>

            <FaqItem index={2} question="O que é criptomoedas ?">
              
              <span>
                As corretoras de <strong>criptomoedas</strong> são mercados digitais que permitem aos usuários comprar e vender criptomoedas como o <strong>Bitcoin</strong>, <strong>Ethereum</strong> e <strong>Tether</strong>. 
                A corretora Binance é a maior corretora de criptomoedas por volume de trades.
              </span>
            </FaqItem>

            <FaqItem index={3} question="O que é a bynance ?">
              
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
