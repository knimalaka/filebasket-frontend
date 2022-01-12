import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {//View, upload, signout options
  const [singleFile,  setSingleFile] = useState('');
  const [multipleFiles, setMultipleFiles] = useState('');

  const SingleFileChange = (e) =>{
    setSingleFile(e.target.files[0]);
  }
  return (
    <div className={styles.container}> 
      <main className={styles.main}>
      <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>

      <div>
        <h1 className>This is the user Home page</h1>
          <div className='row mt-3'>
            <div className='col-6'>
              <div className='form-group'>
                <label>Select Single File</label>
                <input type='file' className='form-control' onChange={(e)=>SingleFileChange(e)}/>
              </div>
              <div className='row'>
                <div className='col-10'>
                  <button type='button' className='btn btn-primary'>upload</button>
                </div>
              </div>
            </div>
          </div>

        <br/><br/>

          <div className='col-6'>
            <div className='row'>
              <div className='col-6'>
                <label>Title</label>
                <input type="text" className='form-control' />
              </div>
            </div>
            <div className='col-6'>
            <div className='form-group'>
                <label>Select Multiple Files</label>
                <input type='file' className='form-control' multiple/>
              </div>
              </div>
              <div className='row'>
                <div className='col-10'>
                  <button type='button'>upload</button>
                </div>
              </div>
          </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}



