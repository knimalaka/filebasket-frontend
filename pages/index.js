import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Front() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>

        <h1 className={styles.title}>
          Welcome to <a href='/'>File Basket!</a>
        </h1>

        <br/><br/>

        <div className={styles.grid}>
          <a href="user/login" className={styles.card}>
            <h2>User &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="admin/aLogin" className={styles.card}>
            <h2>Admin &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

        </div>
      </main>

      <Footer />

    </div>
  )
}
