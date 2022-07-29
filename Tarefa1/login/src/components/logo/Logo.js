import logo from "../../imgs/logo.svg"
import { Link } from "react-router-dom"

export const Logo = ({direction}) => {
  return (
    <Link to='/'><img src={logo} alt="logo"/></Link>
  )
}