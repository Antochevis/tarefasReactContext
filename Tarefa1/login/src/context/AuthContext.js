import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiDbc } from "../api";


const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [login, setLogin] = useState(false)

  const navigate = useNavigate();

  async function handleLogin(user) {
    try {
      const {data} = await apiDbc.post('/auth', user);
      localStorage.setItem('token', data)
      navigate('/pessoa')
      setLogin(true)
    } catch (e) {
      alert('deu erro')
    }
  }

  async function handleSignUp(values) {
    try {
      await apiDbc.post('/auth/create', values)
      alert('Usuário cadastrado com sucesso')
      navigate('/')
    } catch(e) {
      console.log(e)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, handleSignUp}}>
      {children}
    </AuthContext.Provider>
  )

}

export {AuthContext, AuthProvider}