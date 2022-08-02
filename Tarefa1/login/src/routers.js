import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from './pages/login/Login'
import Usuarios from "./pages/usuarios/Usuarios";
import Address from "./pages/address/Address";
import People from "./pages/people/People";
import { useContext } from "react";
import PeopleForm from "./pages/people/PeopleForm";
import PeopleDetail from "./pages/people/PeopleDetail";
import { Outlet, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PeopleProvider } from "./context/PeopleContext";


const PrivateRoute = () => {
  const {auth} = useContext(AuthContext)

  return (
    auth ? <Outlet/> : <Navigate to="/"/>
  )
}

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <PeopleProvider>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path='/endereco/:id' element={<Address />} />
            <Route path='/pessoa' element={<People />} /> 
            <Route path='/criar-pessoa' element={<PeopleForm />} />
            <Route path='/editar-pessoa/:id' element={<PeopleForm />} />
            <Route path='/detalhe-pessoa/:id' element={<PeopleDetail />} />
            <Route path='/editar-endereco/:id/:idEndereco' element={<Address />} />
          </Route>
        </Routes>
        </PeopleProvider>
      </AuthProvider>
  </BrowserRouter>

  )
}

export default Routers