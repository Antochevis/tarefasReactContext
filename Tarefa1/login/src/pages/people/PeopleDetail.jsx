import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../../context/PeopleContext";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonsDetailsPerson, ContainerDetailPerson, DetailPerson, InfosAddress, InfosAddressApi, UserItens } from "./People.Styled";
import { FormatDateUsaToBr, CpfFlatList } from "../../utils/Formatting";
import { apiDbc } from "../../services/api";
import { CepDetailPeople } from "../../utils/Formatting";

function PeopleDetail() {
  const {getPessoaById, pessoa} = useContext(PeopleContext)
  const {id} = useParams();
  const navigate = useNavigate()
  const [address, setAddress] = useState([]);

  async function getAddress(idPessoa) {
    try {
      const {data} = await apiDbc.get(`endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`)
      console.log(data)
      setAddress(data)
    } catch (error) {
      alert (error)
    }
  }

  async function setup() {
    getPessoaById(id)
    getAddress(id)
  }
  
  useEffect(() => {
    setup()
  }, [])

  async function handleAddress() {
    navigate(`/endereco/${id}`)
  }

  async function backToPeople() {
    navigate(`/pessoa`)
  }
  
  return (
    <ContainerDetailPerson>
      <aside></aside>
      {pessoa.map(item => (
        <DetailPerson key={item.idPessoa}>
          <p>Nome: {item.nome}</p>
          <UserItens>
            <p>Data de nascimento: {FormatDateUsaToBr(item.dataNascimento)}</p>
            <p>CPF: {CpfFlatList(item.cpf)}</p>
            <p>E-mail: {item.email}</p>
          </UserItens>
          <InfosAddress>
            <p>CEP</p>
            <p>Tipo</p>
            <p>Rua</p>
            <p>Número</p>
            <p>Cidade</p>
            <p>Estado</p>
            <p>País</p>
            <p>Complemento</p>
          </InfosAddress>
          {address.map(item => (
            <InfosAddressApi key={item.idPessoa}>
              <p>{CepDetailPeople(item.cep)}</p>
              <p>{item.tipo}</p>
              <p>{item.logradouro}</p>
              <p>{item.numero}</p>
              <p>{item.cidade}</p>
              <p>{item.estado}</p>
              <p>{item.pais}</p>
              <p>{item.complemento}</p>
            </InfosAddressApi>
          ))}
          <ButtonsDetailsPerson>
            <button onClick={backToPeople}>Voltar</button>
            <button onClick={handleAddress}>Cadastrar Endereço</button>
          </ButtonsDetailsPerson>
        </DetailPerson>
      ))}
    </ContainerDetailPerson>
  )
}

export default PeopleDetail