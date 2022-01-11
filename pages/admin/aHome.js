import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export default function Home() {//View, signout options
  return (
    <div className={styles.container}> 
      <main className={styles.main}>
        <h1 className={styles.title}>
            I'm the admin home page
        </h1>

        <br/><br/>

        <div className={styles.grid}>
          <a href="user/login" className={styles.card}>
            {/*only view option*/}
            <h2>View Files &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>
      </main>

      <Footer />

    </div>
  )
}
