import SignupForm from "../../components/SignupForm"
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'

export default function Signup(){
return(
    <div className={styles.container}>
        <main className={styles.main}>
        <h1>I'm the admin signup page</h1>
        <SignupForm />
        
        </main>
        <Footer />
    </div>
)
}
