import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { multipleFileUpload } from '../pages/api/api'

export default function FileUpload(props) {//View, upload, signout options
  const [multipleFiles, setMultipleFiles] = useState('');
  const [title, setTitle] = useState('');

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  }

  const UploadMultipleFiles = async() => {
    const formData = new FormData();
    formData.append('title',title)
    for(let i=0; i<multipleFiles.length; i++){
        formData.append('files',multipleFiles[i]);
    }
    await multipleFileUpload(formData);
}  

  return (
    <div className={styles.container}> 
      <main className={styles.main}>
      <Head>
          <title>File Basket</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>

      <div>
          <div className='col-6'>
          <div className='col-6'>
                <label>Title</label>
                <input type="text" className='form-control' />
              </div>

            <div className='col-6'>
            <div className='form-group'>
                <label>Select Files:</label>
                <input type='file' onChange={(e) => MultipleFileChange(e)} className='form-control' multiple/>
              </div>
              </div>
              <div className='row'>
                <div className='col-10'>
                <div className="col text-center">
                  <button type='button' className='btn btn-primary btn-sm' onClick={() => UploadMultipleFiles()}>upload</button>
                  </div>
                </div>
              </div>
          </div>


      </div>
    </main>
  </div>
  )
}



