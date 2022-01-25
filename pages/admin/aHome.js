import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import Head from 'next/head'
import FileUpload from '../../components/fileUpload'
import { faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  //View, upload, signout options

  return (
    <div className={styles.container}> 
      <div className={styles.background}>
      <main className={styles.main}>
        <div className='row no-gutters'>
      <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>
      <h1 className="text-sm-left" style={{color:'#7F8C8D', marginLeft:40, fontSize:45}}> <FontAwesomeIcon style={{color:'#2ECC71'}} icon={faShoppingBasket} width={40}/>FileBasket</h1>
      <div className={styles.signout}>
      <a href='/'><h3 className={styles.signout} style={{fontFamily:'Bahnschrift',fontSize:15,marginLeft:40}}>Signout <FontAwesomeIcon icon={faUserTimes} width={16}/></h3> </a>
      </div>    

      </div>
    </main>
    </div>
    <Footer />
  </div>
  )
}



