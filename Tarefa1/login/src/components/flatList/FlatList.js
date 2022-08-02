import { apiDbc } from '../../services/api'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ButtonDetails, ButtonRemove, ButtonUpdate, ContainerFlatList } from './FlatList.Styled';
import { FormatDateUsaToBr, CpfFlatList } from "../../utils/Formatting";
import { toast } from "react-hot-toast"


function FlatList({list}) {
  const [pessoas, setPessoas] = useState([]);
  const navigate = useNavigate()

  const setup = async () => {
    try {
      const { data } = await apiDbc.get("/pessoa?pagina=0&tamanhoDasPaginas=100");
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

  async function handleDetail(idPessoa) {
    navigate(`/detalhe-pessoa/${idPessoa}`)
  }

  async function handleDelete(idPessoa) {
    try {
      await apiDbc.delete(`/pessoa/${idPessoa}`)
      setup()
      toast.success('Usuário excluído com sucesso')
    } catch(e) {
      toast.error('Deu erro')
    }
  }

  return (
    <>
    {pessoas.map(item => (
      <ContainerFlatList key={item.idPessoas}>
        <p>{item.nome}</p>
        <p>{FormatDateUsaToBr(item.dataNascimento)}</p>
        <p>{CpfFlatList(item.cpf)}</p>
        <p>{item.email}</p>
        <div>
          <ButtonDetails onClick={() => handleDetail(item.idPessoa)}>Details</ButtonDetails>
          <ButtonUpdate onClick={() => handleUpdate(item.idPessoa)}>Update</ButtonUpdate> 
          <ButtonRemove onClick={() => handleDelete(item.idPessoa)}>Remove</ButtonRemove>
        </div>
      </ContainerFlatList>
    ))}
    </>
  )
}

export default FlatList