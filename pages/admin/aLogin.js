import LoginForm from "../../components/loginForm"
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'

export default function ALogin(){
return(
    <div className={styles.container}>
        <main className={styles.main}>
        <h1>I'm the admin login page</h1>
        <LoginForm />

        <h4>Haven't registered yet? click here to <a href="../admin/aSignup">sign in!</a></h4>
        
        </main>
        <Footer />
    </div>
)
}
