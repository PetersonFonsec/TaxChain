import styles from "./footer.module.css";

export default function FooterSection() {
  return (
      <footer className={styles.footer}>
        <span>Feito com 💛 por um dev curioso.</span>
        <hr />
        <span>© 2024 Peterson F. Simião. Todos os direitos reservados.</span>
      </footer>
  );
}
