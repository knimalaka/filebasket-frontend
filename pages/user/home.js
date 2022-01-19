import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import FileUpload from '../../components/fileUpload'

export default function Home() {//View, upload, signout options

  return (
    <div className={styles.container}> 
      <main className={styles.main}>
      <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>

      <div>          
        <FileUpload/>
      </div>
    </main>
    <Footer />
  </div>
  )
}



