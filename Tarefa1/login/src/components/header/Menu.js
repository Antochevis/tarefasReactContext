import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { HeaderNavUl } from "./Header.Styled";
import Item from "./Item"


function Menu() {

  const {auth, handleLogout} = useContext(AuthContext);

  return (
    
    <nav>
      <HeaderNavUl>
        {!auth ? 
        (<>
          <Item name='Login' url='/'/>
          <Item name='Cadastrar usuário' url='/usuarios'/> </>) : 
        (<>
          <Item name='Endereço' url='/endereco'/>
          <Item name='Pessoa' url='/pessoa' />
        </>)}
      </HeaderNavUl>
      {auth && <button onClick={handleLogout}>Sair</button>}
    </nav>
    
  )
}

export default Menu