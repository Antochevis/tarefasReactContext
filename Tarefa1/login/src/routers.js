import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { AuthContext } from "./context/AuthContext";
import Login from './pages/login/Login'
import Usuarios from "./pages/usuarios/Usuarios";
import Address from "./pages/address/Address";
import People from "./pages/people/People";
import { useContext } from "react";
import NotFound from "./pages/notFound/NotFound";


function Routers() {
  const {auth} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          {!auth ? (<>
            <Route exact path='/' element={<Login />} />
            <Route path='/usuarios' element={<Usuarios />} />
            </>) : (<>    
            <Route path='/endereco' element={<Address />} />
            <Route path='/pessoa' element={<People />} /> </>)
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers