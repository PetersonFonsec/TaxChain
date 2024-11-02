import styles from "./land-page.module.css";

import { Form } from "./form/form";

export default function LandPageSection() {
  return (
        <section className={styles.page}>
          <div className={styles.content}>
            <h1 className="title">
              <strong>Não Complica! </strong>
              Faça Sua Declaração de Cripto em Minutos.
            </h1>

            <ol className={styles.list}>
              <li>
                1 ° Entre na sua corretora e exporte o extrato das suas movimentações do ultimo ano.
              </li>

              <li>
                2 ° Preencha o formulário ao lado, com o seu email e anexe seu extrato fornecido pela corretora.
              </li>

              <li>
              <strong>3° Pronto! </strong>Agora é só aguardar que enviaremos por email um link com acesso válido durante 3 dias.
              </li>
            </ol>
          </div>

          <Form />
        </section>
  );
}
