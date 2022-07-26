import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from './pages/login/Login'
import Usuarios from "./pages/usuarios/Usuarios";


function Routers() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/usuarios' element={<Usuarios />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers