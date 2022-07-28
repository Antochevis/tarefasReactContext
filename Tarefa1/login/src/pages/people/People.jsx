import { Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { apiDbc } from "../../api"
import Modal from 'react-modal'

function People() {
  const [pessoas, setPessoas] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  async function setup() {
    try {
      const {data} = await apiDbc.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
      console.log('data.content')
      setPessoas(data.content)
    } catch(e) {
      alert(e)
    }
  }

  useEffect(() => {
    setup()
  }, [])

  async function handleDelete(idPessoa) {
    try {
      await apiDbc.delete(`/pessoa/${idPessoa}`)
      alert('Pessoa deletada')
      setup()
    } catch(e) {
      alert(e)
    }
  }

  function handleOpenModal() {
    setModalIsOpen(true)
  }

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  async function handleUpdate(idPessoa, updatePerson) {

    /*
    const updatePerson = {
      nome: Field.nome.idPessoa,
      dataNascimento: Field.dataNascimento.idPessoa,
      cpf: Field.cpf.idPessoa,
      email: Field.email.idPessoa
    }
    */

    try {
      await apiDbc.put(`/pessoa/${idPessoa}`, updatePerson)
      alert('Pessoa editada')
      setup()
      setIsUpdate(false)
    } catch (e) {
      alert(e)
    }
  }

  async function handleAdd(pessoa) {

    try {
      await apiDbc.post(`/pessoa`, pessoa)
      alert('Pessoa cadastrada')
      setup()
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <div>
        <h1>Cadastrar Pessoa</h1>
        <Formik
        initialValues={{
          nome:'',
          dataNascimento:'',
          cpf:'',
          email:''
        }}
        onSubmit={value => {
          // eslint-disable-next-line no-lone-blocks
          {isUpdate ? handleUpdate(value.idPessoa, value) : handleAdd(value) }
        }}
        >
          <Form>
            <label htmlFor="nome">Nome:</label>
            <Field name='nome' />
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <Field name='dataNascimento' />
            <label htmlFor="cpf">CPF:</label>
            <Field name='cpf' />
            <label htmlFor="email">E-mail:</label>
            <Field name='email' />
            <button type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>
          </Form>
        </Formik>

        {pessoas.map(pessoa => (
          <div key={pessoa.idPessoas}>
            <p>Nome: {pessoa.nome}</p>
            <p>Data de Nascimento: {pessoa.dataNascimento}</p>
            <p>CPF: {pessoa.cpf}</p>
            <p>E-mail: {pessoa.email}</p>
            <button onClick={() => {setIsUpdate(true)}}>Editar</button> 
            <button onClick={() => {handleOpenModal()}}>Apagar</button>
            <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
              <h2>Você tem certeza que deseja excluir?</h2>
              <button onClick={() => handleDelete(pessoa.idPessoa)}>Excluir</button>
              <button onClick={handleCloseModal}>Cancelar</button>
            </Modal>
          </div>
        ))}
      </div>
    </>
  )
}

export default People