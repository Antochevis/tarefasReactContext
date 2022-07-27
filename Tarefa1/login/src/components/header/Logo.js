import { FaDragon } from "react-icons/fa";
import { Link } from "react-router-dom";


function Logo() {
  return (
    <Link to='/'><FaDragon style={{ fontSize: 50, color: 'red' }}/></Link>
  )
}

export default Logo