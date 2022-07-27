import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";

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

const Login = () => {
  const {handleLogin} = useContext(AuthContext)
  return (
    <div>
      <h1>Acesse sua conta</h1>
      <Formik
        initialValues={{
          login:'',
          senha:''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          handleLogin(values);
        }}
      >
      {({errors, touched}) => (
        <Form>
          <Field name='login' />
          {errors.login && touched.login ? (<div>{errors.login}</div>) : null}
          <Field type='password' name='senha' />
          {errors.senha && touched.senha ? (<div>{errors.senha}</div>) : null}
          <button type="submit">Entrar</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}


/*
const Login = () => {
  
  const {handleLogin} = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      login: '',
      senha: ''
    },
    onSubmit: values => {
      handleLogin(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">Usuário</label>
      <input id='login' name='login' type='text' onChange={formik.handleChange} value={formik.values.login} />
      <label htmlFor="senha">Senha</label>
      <input id='senha' name='senha' type='password' onChange={formik.handleChange} value={formik.values.senha} />
      <button type='submit'>Entrar</button>
    </form>
  );
  
}
*/

export default Login;