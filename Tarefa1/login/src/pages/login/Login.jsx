import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { LoginContainer, Title } from "./Login.Styled";

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
    <LoginContainer>
      <Title>Acesse sua conta</Title>
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
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Field name='login' />
          {errors.login && touched.login ? (<div>{errors.login}</div>) : null}
          <Field type='password' name='senha' />
          {errors.senha && touched.senha ? (<div>{errors.senha}</div>) : null}
          <button type="submit">Entrar</button>
        </Form>
      )}
      </Formik>
    </LoginContainer>
  )
}

export default Login;