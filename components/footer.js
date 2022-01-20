import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
      <footer className={styles.footer}>
        <a
          href="https://www.elysiancrest.com/"
          target="_blank"
          rel="noopener noreferrer"
        ><div style={{color:'white'}}>
          Powered by :
          </div>
          <span className={styles.logo}>
            <Image className='logo-image' src="/ECLogoDark.png" alt="EC Logo" width={70} height={70} />
          </span>
        </a>
        </footer>
    )
}