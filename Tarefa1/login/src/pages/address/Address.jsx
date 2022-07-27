import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { apiCep } from '../../api';
import { Formik, Form, Field } from 'formik';
import { IMaskInput } from "react-imask";

function Address() {

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/')
    }
  }, [])


  async function onBlurCep(ev, setFieldValue) {
    const {value} = ev.target
    if(value?.length !== 9) {
      alert('cep invalido')
      return;
    } 
    const cep = value.replace('-', '')
    console.log(cep)

    try{
      const {data} = await apiCep.get(`/${(cep)}/json/`)
      console.log(data)
      setFieldValue('logradouro', data.logradouro)
      setFieldValue('bairro', data.bairro)
      setFieldValue('localidade', data.localidade)
      setFieldValue('uf', data.uf)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          cep:'',
          rua:'',
          bairro:'',
          cidade:'',
          estado:''
        }}
        onSubmit={values => {
          alert('endereço cadastrado!!!!');
        }}
      >
      {({setFieldValue}) => (
        <Form>
          <label htmlFor="cep">CEP</label>
          <IMaskInput mask="00000-000" placeholder="Digite o seu CEP" onBlur={(ev) => onBlurCep(ev, setFieldValue)}/>
          <label htmlFor="logradouro">Rua</label>
          <Field name='logradouro' />
          <label htmlFor="bairro">Bairro</label>
          <Field name='bairro' />
          <label htmlFor="localidade">Cidade</label>
          <Field name='localidade' />
          <label htmlFor='uf'>Estado</label>
          <Field name='uf' />
          <button>Cadastrar endereço</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default Address