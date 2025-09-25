import axios from "axios";

interface login {
  login:string,
  clave:string

}

export async function Loginsend(data: login) {
  console.log('Body:', data);
  try {
    const response = await axios.post(
    'https://apinoticia.onrender.com/api/auth/login',
    data
  ); 
  console.log(response)
  localStorage.setItem('user', response.data.token);


  return response.data;
    
  } catch (error) {
    console.log(error)
    
  }
  

}