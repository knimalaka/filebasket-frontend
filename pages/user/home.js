import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export default function Home() {//View, upload, signout options
  return (
    <div className={styles.container}> 
      <main className={styles.main}>
        <h1 className={styles.title}>
            I'm the user home page
        </h1>

        <br/><br/>

        <div className={styles.grid}>
          <a href="user/login" className={styles.card}>
            {/*view and delete featues*/}
            <h2>View My Files &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="admin/aLogin" className={styles.card}>
            {/*drag and drop featue*/}
            <h2>Upload new Files &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

        </div>
      </main>

      <Footer />

    </div>
  )
}
