import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import Head from 'next/head'
import FileUpload from '../../components/fileUpload'
import Image from 'next/image'

export default function Home() {
  //View, upload, signout options

  return (
    <div className={styles.container}> 
      <main className={styles.main}>
        <div className='row no-gutters'>
      <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>
      <h4 className="text-sm-left"><span style={{color:'#229954'}}>File</span>Basket</h4>

      <div className="d-flex flex-row-reverse">
      <a href='/' >Signout <Image className='float-right' src="/user_icon.png" alt="EC Logo" width={17} height={17}/></a>
      </div>     

      <div>          
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <FileUpload/>
      </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}



