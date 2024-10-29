import styles from "./about.module.css";
import FaqItem from "../../faq-item/faq-item";

export default function AboutSection() {
  return (
    <>
      <section className={styles.about}>
          <h2 className={styles.title}>Perguntas Frequentes</h2>

          <ol className={styles.aboutList}>
            <FaqItem index={1} question="O que é TaxChain e como funciona ?">
              resposta
            </FaqItem>

            <FaqItem index={2} question="O que é criptomoedas ?">
              resposta
            </FaqItem>

            <FaqItem index={3} question="O que é a bynance ?">
              resposta
            </FaqItem>

            <FaqItem index={4} question="O que é uma corretora de criptomoedas ?">
              resposta
            </FaqItem>
          </ol>
        </section>
    </>
  );
}
