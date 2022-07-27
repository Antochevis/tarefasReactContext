import { Link } from "react-router-dom"

function Item({name, url}) {
  return (
    <li><Link to={url}>{name}</Link></li>
  )
}

export default Item