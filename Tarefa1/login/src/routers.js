import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from './pages/login/Login'
import Usuarios from "./pages/usuarios/Usuarios";
import Address from "./pages/address/Address";
import People from "./pages/people/People";
import { useContext } from "react";
import PeopleForm from "./pages/people/PeopleForm";
import PeopleDetail from "./pages/people/PeopleDetail";


function Routers() {
  const {auth} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        {!auth ? (<>
          <Route exact path='/' element={<Login />} />
          <Route path='/usuarios' element={<Usuarios />} />
          </>) : (<>    
          <Route path='/endereco/:id' element={<Address />} />
          <Route path='/pessoa' element={<People />} /> 
          <Route path='/criar-pessoa' element={<PeopleForm />} />
          <Route path='/editar-pessoa/:id' element={<PeopleForm />} />
          <Route path='/detalhe-pessoa/:id' element={<PeopleDetail />} />
          <Route path='/editar-endereco/:id/:idEndereco' element={<Address />} />
          </>)
        }
      </Routes>
    </BrowserRouter>
  )
}

export default Routers