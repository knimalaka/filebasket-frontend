import axios from 'axios'

//connecting to backend
const apiUrl = 'http://localhost:8080/api/'

export const multipleFileUpload = async(data) => {
try{
    await axios.post(apiUrl + 'multipleFiles', data)
}catch(error){
    throw error;
}
}
 