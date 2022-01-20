import LoginForm from "../../components/loginForm"
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function ALogin(){
return(
    <div className={styles.container}>
        <div className={styles.background}>
        <main className={styles.main}>
        <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>
            <h1 className="text-center" style={{color:'#229954'}}>Login to admin account</h1>
        <LoginForm />
        <h5 style={{color:'#229954'}}>Haven't registered yet? click here to <a style={{color:'white'}}href="../admin/aSignup">sign in!</a></h5>
        </main>
        </div>
        <Footer />
    </div>
)
}
