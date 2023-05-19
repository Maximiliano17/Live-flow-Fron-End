import styles from "../modules/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.info}>
          <p className={styles.derechos}>
            Desarrollado por Dos Santos Maximiliano y Juan Pablo Villalba -
            @2023 - Connected World
          </p>
          <p className={styles.responsive}>Desarrollado por @Connected World</p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
