import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Front() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      <main className={styles.main}>
        <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>

        <h1 className={styles.title} style={{color:'#B3B6B7'}}>
          Welcome to <a href='/'>File Basket!</a>
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
