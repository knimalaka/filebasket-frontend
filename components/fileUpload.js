import { useState } from 'react'
import { multipleFileUpload } from '../pages/api/api'
import styles from '../styles/Home.module.css'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FileUpload(props) {
  //single or multiple files upload option
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
    console.log(multipleFiles);
    await multipleFileUpload(formData);
}  

return (
  <div>
      <div className='col-6'>
        <div className='form-group' style={{width:320}}>
        <label className= {styles.uploadFiles} for="firstImage">
         <FontAwesomeIcon icon={faCloudUploadAlt} width={35}/>
            Drag & Drop to Upload Files <n/> or <n/> Browse Files</label>
          <input id="firstImage" type='file' onChange={(e) => MultipleFileChange(e)} multiple
          style={{display:'none', visibility:'none', opacity:0, height:'18%', display:'flex', 
          position:'absolute',top:380}}/>
          </div>
          </div>
          <div className='row'> 
            <div className='col-10'>
            <div className="col text-center">
              <button className="btn btn-success btn-sm" onClick={() => UploadMultipleFiles()} style={{height:30, 
              borderRadius:30, width:130,fontFamily:'Bahnschrift',fontSize:14}} type="button">Upload</button>
              </div>
            </div>
          </div>
  </div>
)
}


