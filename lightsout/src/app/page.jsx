import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.sectionHome} >
        <h1>PAGINA HOME</h1>
      </div>
      <div className={styles.sectionDestino} >
      <h1 id="DESTINO" >DESTINOS</h1>
      </div>
    </div>
  );
}
