import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";
import Item from "./Item"


function Menu() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token) {
      navigate('/')
    }
  },[])

  const {handleLogout} = useContext(AuthContext);

  return (
    
    <nav>
      <ul>
        {!token ? 
        (<>
          <Item name='Login' url='/'/>
          <Item name='Cadastrar usuário' url='/usuarios'/> </>) : 
        (<>
          <Item name='Endereço' url='/endereco'/>
          <Item name='Pessoa' url='/pessoa' />
        </>)}
      </ul>
      {token && <button onClick={handleLogout}>Sair</button>}
    </nav>
    
  )
}

export default Menu