import SignupForm from "../../components/SignupForm"
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function Signup(){
return(
    <div className={styles.container}>
        <div className={styles.background}>
        <main className={styles.main}>
        <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>
        <h1 style={{color:'#229954',fontSize:40}}>Create account</h1>
        <SignupForm />
        </main>
        </div>
        <Footer />
    </div>
)
}
