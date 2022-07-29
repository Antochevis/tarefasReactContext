import { useState } from "react"
import { ContainerPeople } from "./People.Styled"
import { useNavigate } from "react-router-dom"
import FlatList from "../../components/flatList/FlatList"

function People() {
  const navigate = useNavigate()
  const [pessoas, setPessoas] = useState([])

  function handleAdd() {
    navigate('/criar-pessoa')
  }

  return (
    <>
      <ContainerPeople> 
        <button onClick={handleAdd}>Cadastrar Pessoa</button>
        <FlatList list={pessoas} />
      </ContainerPeople>
    </>
  )
}

export default People