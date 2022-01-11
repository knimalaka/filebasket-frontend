import LoginForm from "../../components/loginForm"
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'

export default function Login(){
return(
    <div className={styles.container}>
        <main className={styles.main}>
        <h1>I'm the user login page</h1>
        <LoginForm />

        <h4>Haven't registered yet? click here to <a href="../user/signup">sign in!</a></h4>
        
        </main>
        <Footer />
    </div>
)
}
