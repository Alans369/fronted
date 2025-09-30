import { useEffect, useState } from "react";
import { AuthService } from "./services/Auth";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";




const Login = () => {
   const navigate = useNavigate();

  //const request=new AuthService()
  const [inputs, setInputs] = useState({ login: '', clave: '' })
  const [see,setSee] = useState(false)

   const [isVisible,setIsVisible] = useState(false)
   

  console.log('render');
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();           // ← SIEMPRE primero
    console.log('enviando datos');
    try {
      await AuthService.login(inputs);    // ← espera para ver logs o errores
      navigate('/admin');               // ← navega sólo si no hubo errores
     
    } catch (err) {
      console.error('Login falló', err);
      setIsVisible(true)
    }
    
  }

  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }))
  }

  function handleSee(){
    setSee(!see)
  }

    useEffect(() => {
                          // Si el mensaje es visible, inicia un temporizador
                          if (isVisible) {
                            const timer = setTimeout(() => {
                              setIsVisible(false);
                             
                            }, 2000);
                      
                            // Limpia el temporizador si el componente se desmonta antes de que pase el segundo
                            return () => clearTimeout(timer);
                          }
                        }, [isVisible]);


  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-50 -p-10">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-[480px] w-full">


            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
              <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">User name</label>
                  <div className="relative flex items-center">
                    <input type="text"
                      value={inputs.login}
                      onChange={handleChange} name="login" required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input value={inputs.clave}
                      onChange={handleChange} name="clave" type={see==false?'password':'text'} required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                    <svg onClick={handleSee} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                    <label className="ml-3 block text-sm text-slate-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="jajvascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="!mt-12">
                  <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                    Sign in
                  </button>
                </div>
                <p className="text-slate-900 text-sm !mt-6 text-center">Don't have an account? <span onClick={()=>{navigate('/register')}} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</span></p>
              </form>


                { isVisible && <div className="bg-red-50 text-red-800 p-6 rounded-lg relative" role="alert">
              <div className="mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] cursor-pointer fill-red-500 inline mr-3 shrink-0" viewBox="0 0 32 32">
                      <path
                          d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm6.36 20L21 22.36l-5-4.95-4.95 4.95L9.64 21l4.95-5-4.95-4.95 1.41-1.41L16 14.59l5-4.95 1.41 1.41-5 4.95z"
                          data-original="#ea2d3f" />
                  </svg>
                  <p className="font-semibold text-[15px] mr-3">Error Message!</p>
              </div>

              <span className="block sm:inline text-sm font-medium">.credendenciales invalidas</span>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 cursor-pointer fill-red-500 absolute right-4 top-4"
                  viewBox="0 0 320.591 320.591">
                  <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000" />
                  <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000" />
              </svg>

              <a href="javascript:void(0)" className="border-b border-red-800 block w-max text-sm font-medium text-red-800 mt-3">Learn more</a>
          </div> } 

              


            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Login
