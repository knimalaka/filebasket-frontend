import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import Head from 'next/head'
import FileUpload from '../../components/fileUpload'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar} from '../../components/navbar'

export default function Home() {
  //View, upload, signout options

  return (
    <div>

    <div className={styles.container}>
      <Navbar /> 
      <div className={styles.background}>
      <main className={styles.main}>
        <div className='row no-gutters'>
      <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>

      <h1 className="inline-flex text-sm-left" style={{color:'#7F8C8D', marginLeft:40, fontSize:45}}>
        <FontAwesomeIcon style={{color:'#2ECC71'}} icon={faShoppingBasket} width={40}/>FileBasket
      </h1>

      <div>          
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <FileUpload/>
        <br/><br/><br/><br/><br/><br/>
      </div>
      </div>
    </main>
    </div>
    <Footer />
  </div>
  </div>
  )
}



