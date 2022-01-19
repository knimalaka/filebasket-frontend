import SignupForm from "../../components/SignupForm"
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function Signup(){
return(
    <div className={styles.container}>
        <main className={styles.main}>
        <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>
        <h1 className="text-center" style={{color:'#229954'}}>Create admin account</h1>
        <SignupForm />
        
        </main>
        <Footer />
    </div>
)
}
