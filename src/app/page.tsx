import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main >
        <section className={styles.page}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <strong>Não Complica! </strong>
              Faça Sua Declaração de Cripto em Minutos.
            </h1>

            <ol className={styles.list}>
              <li>
                1 ° Entre na sua corretora e exporte o extrato das suas movimentações do ultimo ano.
              </li>

              <li>
                2 ° Preencha o formulário ao lado para receber o seu link, com  o uma pagina unica e exclusiva sua.
              </li>

              <li>
              <strong>3° Pronto! </strong>Agora é só aguardar que enviaremos por email um link com acesso  valido durante 3 dias.
              </li>
            </ol>
          </div>

          <form className={styles.form}>
            <h2>Informe seu contato</h2>
            
            <label htmlFor="email">
              <input className={styles.input} id="email" placeholder="E-mail" type="text" />
            </label>

            <label htmlFor="celphone">
              <input className={styles.input} id="celphone" placeholder="Telefone" type="text" />
            </label>

            <button className={styles.button}>Upload do extrato</button>

            <legend>Por enquanto funcionamos apenas com o formato de extrato da bynance.</legend>
          </form>
        </section>

        <section className={styles.about}>
          <h2 className={styles.title}>Perguntas Frequentes</h2>

          <ol className={styles.aboutList}>
            <li>
              <span className={styles.square}>1</span>

              <span className={styles.aboutListItem}>
                O que é TaxChain e como funciona ?
              </span>

              <button className={styles.aboutListButton} type="button"></button>
            </li>
            
            <li className={styles.aboutListItem}>
              <span className={styles.square}>2</span>

              <span className={styles.aboutListItem}>
              O que é criptomoedas ?
              </span>

              <button className={styles.aboutListButton} type="button"></button>
            </li>
            
            <li className={styles.aboutListItem}>
              <span className={styles.square}>3</span>

              <span className={styles.aboutListItem}>
                O que é a bynance ?
              </span>

              <button className={styles.aboutListButton} type="button"></button>
            </li>
            
            <li className={styles.aboutListItem}>
              <span className={styles.square}>4</span>

              <span className={styles.aboutListItem}>
              O que é uma corretora de criptomoedas ?
              </span>

              <button className={styles.aboutListButton} type="button"></button>
            </li>
          </ol>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Feito com 💛 por um dev curioso.</span>
        <hr />
        <span>© 2024 Peterson F. Simião. Todos os direitos reservados.</span>
      </footer>
    </>
  );
}
