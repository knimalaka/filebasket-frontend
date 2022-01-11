import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
      <footer className={styles.footer}>
        <a
          href="https://www.elysiancrest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/EClogo.jpg" alt="EC Logo" width={60} height={60} />
          </span>
        </a>
        </footer>
    )
}