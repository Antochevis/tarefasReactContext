import { createContext, useState, useEffect } from "react";
import { apiDbc } from "../api";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      apiDbc.defaults.headers.common['Authorization'] = token
      setAuth(true)
    }
    setLoading(false)
  }, [])

  async function handleLogin(user) {
    try {
      const {data} = await apiDbc.post('/auth', user);
      localStorage.setItem('token', data)
      apiDbc.defaults.headers.common['Authorization'] = data
      setAuth(true)
      window.location.href = '/endereco'
    } catch (e) {
      alert('deu erro')
    }
  }

  async function handleSignUp(values) {
    try {
      await apiDbc.post('/auth/create', values)
      alert('Usuário cadastrado com sucesso')
      window.location.href = '/'
    } catch(e) {
      console.log(e)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    apiDbc.defaults.headers.common['Authorization'] = undefined
    setAuth(false)
    window.location.href = '/'
  }

  if(loading) {
    return(
      <h1>Loading</h1>
    )
  }
  
  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, handleSignUp, auth}}>
      {children}
    </AuthContext.Provider>
  )

}

export {AuthContext, AuthProvider}