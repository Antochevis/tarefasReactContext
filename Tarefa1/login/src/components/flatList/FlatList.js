import { apiDbc } from "../../api"
import { useNavigate } from "react-router-dom"
import Modal from "react-modal"
import { useState, useEffect } from "react"


function FlatList({list}) {
  //const [modalIsOpen, setModalIsOpen] = useState(false)
  const [pessoas, setPessoas] = useState([]);
  const navigate = useNavigate()

  const setup = async () => {
    try {
      const { data } = await apiDbc.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
      setPessoas(data.content);
      console.log(data.content)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    setup();
  }, [])

  async function handleUpdate(idPessoa) {
    navigate(`/editar-pessoa/${idPessoa}`)
  }

  async function handleDelete(idPessoa) {
    try {
      await apiDbc.delete(`/pessoa/${idPessoa}`)
      alert('Pessoa deletada')
      setup()
    } catch(e) {
      alert(e)
    }
  }

  /*
  function handleOpenModal() {
    setModalIsOpen(true)
  }

  function handleCloseModal() {
    setModalIsOpen(false)
  }
  */
  

  return (
    <>
    {pessoas.map(item => (
      <div key={item.idPessoas}>
        <p>Nome: {item.nome}</p>
        <p>Data de Nascimento: {item.dataNascimento}</p>
        <p>CPF: {item.cpf}</p>
        <p>E-mail: {item.email}</p>
        <button onClick={() => handleUpdate(item.idPessoa)}>Editar</button> 
        <button onClick={() => handleDelete(item.idPessoa)}>Apagar</button>
      </div>
    ))}
    </>
  )
}

export default FlatList