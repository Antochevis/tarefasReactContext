import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  //const [login, setLogin] = useState(false)

  const navigate = useNavigate();

  async function handleLogin(user) {
    try {
      const {data} = await api.post('/auth', user);
      localStorage.setItem('token', data);
      navigate('/usuarios');
      //setLogin(true)
    } catch (e) {
      alert('deu erro')
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider value={{handleLogin}}>
      {children}
    </AuthContext.Provider>
  )

}

export {AuthContext, AuthProvider}