import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Head from 'next/head'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Front() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      <main className={styles.main}>
        <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>

        <h1 className="inline-flex text-sm-left" style={{color:'#7F8C8D', fontSize:50}}>
          <FontAwesomeIcon style={{color:'#2ECC71'}} icon={faShoppingBasket} width={45}/>FileBasket
        </h1>

        <br/><br/>

        <div className={styles.grid} style={{color:'#B3B6B7'}}>
          <a href="user/login" className={styles.card}>
            <h2>User Login &rarr;</h2>
          </a>

          <a href="admin/aLogin" className={styles.card}>
            <h2>Admin Login &rarr;</h2>
          </a>
        </div>
      </main>
      </div>

      <Footer />

    </div>
  )
}
