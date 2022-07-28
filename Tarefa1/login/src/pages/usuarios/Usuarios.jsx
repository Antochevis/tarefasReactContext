import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Field, Form, Formik } from 'formik';
import * as yup from "yup";

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
    <div>
      <h1>Cadastre sua conta</h1>

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
      {({errors, touched}) => (
        <Form>
          <Field name='login' />
          <Field type='password' name='senha' />
          <button type='submit'>Cadastrar</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default Usuarios