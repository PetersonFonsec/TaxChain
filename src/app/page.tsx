import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main id={styles.page}>
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
      </main>

      <footer className={styles.footer}>
      </footer>
    </>
  );
}
