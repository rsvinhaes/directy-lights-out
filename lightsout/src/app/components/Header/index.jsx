import Link from "next/link"
import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.container}>
          <div className={styles.containerImage}>TURISMOES</div>
          <nav className={styles.containerNav}>
              <ul className={styles.containerUl}>
                <li className={styles.containerLi}>
                  <Link href='#HOME' >
                    HOME
                  </Link>
                </li>
                <li className={styles.containerLi}>
                  <Link href='#DESTINO' >
                    DESTINO
                  </Link>
                </li>
                <li className={styles.containerLi}>
                  <Link href='#CULINARIA'>
                    CULINÁRIA
                  </Link>
                </li>
              </ul>
          </nav>
      </div>
    </header>
  )
}