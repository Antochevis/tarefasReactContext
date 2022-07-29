import { useParams } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { apiDbc } from "../../api"
import { useState } from "react"
import { IMaskInput } from "react-imask";

function PeopleForm() {
  const {id} = useParams()
  const [isUpdate, setIsUpdate] = useState(false)


  async function handleAddPerson(pessoa) {
    try {
      await apiDbc.post(`/pessoa`, pessoa)
      console.log(pessoa)
      alert('Pessoa cadastrada')
      window.location.href = '/pessoa'
    } catch (e) {
      alert(e)
    }
  }

  async function handleUpdatePerson(updatePerson, id) {
    
    let idPessoa = id

    try {
      await apiDbc.put(`/pessoa/${idPessoa}`, updatePerson)
      window.location.href = '/pessoa';
      setIsUpdate(false)
      alert('Pessoa editada')
    } catch (error) {
      console.log(error)
    }
  }

  async function onBlurCpf(ev, setFieldValue) {
    const {value} = ev.target
    if(value?.length !== 14) {
      alert('cpf invalido')
      return;
    } 
    const cpf = value.replaceAll('.', '')
    console.log(cpf)
    const cpfSemHifen = cpf.replace('-', '')
    console.log(cpfSemHifen)
  }

  async function onBlurBirthday(ev, setFieldValue) {
    const {value} = ev.target
    if(value?.length !== 10) {
      alert('Data de nascimento invalida')
      return;
    } 
    const birthday = value.replaceAll('/', '')
    console.log(birthday)
  }

  return (
    <>
      <Formik
        initialValues={{
          nome:'',
          dataNascimento:'',
          cpf:'',
          email:''
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors
        }}
        onSubmit={value => {
          // eslint-disable-next-line no-lone-blocks
          {id ? handleUpdatePerson(value, id) : handleAddPerson(value) }
        }}
        >
          {({setFieldValue}) => (
            <Form>
              <label htmlFor="nome">Nome:</label>
              <Field name='nome' />
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <Field name='dataNascimento' />
              <label htmlFor="cpf">CPF:</label>
              <Field name='cpf' />
              <label htmlFor="email">E-mail:</label>
              <Field name='email' />
              <ErrorMessage name="email" />
              <button type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>
            </Form>
          )}
      </Formik>
    </>
  )
}

export default PeopleForm