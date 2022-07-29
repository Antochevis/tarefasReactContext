import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Field, Form, Formik } from 'formik';
import * as yup from "yup";
import { RegisterButtonFormStyle, RegisterContainer, RegisterFormStyle, RegisterTitle } from './Usuarios.Styled';

const SignupSchema = yup.object().shape({
  login: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  senha: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!')
})

function Usuarios() {
  //const navigate = useNavigate();
  
  /*
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/')
    }
  }, [])
  */
 
  const { handleSignUp } = useContext(AuthContext);

  return (
    <RegisterContainer>
      <RegisterTitle>Cadastre sua conta</RegisterTitle>

      <Formik
        initialValues={{
          login:'',
          senha:''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          handleSignUp(values);
        }}
      >
      {() => (
        <Form>
          <RegisterFormStyle>
            <div>
              <label htmlFor="login">Nome: </label>
              <Field name='login' />
            </div>
            <div>
              <label htmlFor="senha">Senha: </label>
              <Field type='password' name='senha' />
            </div>
          <RegisterButtonFormStyle type='submit'>Cadastrar</RegisterButtonFormStyle>
          </RegisterFormStyle>
        </Form>
      )}
      </Formik>
    </RegisterContainer>
  )
}

export default Usuarios