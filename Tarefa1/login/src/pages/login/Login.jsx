import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { Logo } from "../../components/logo/Logo";
import { AuthContext } from "../../context/AuthContext";
import { BackgroundPage, ButtonFormStyle, Errors, FormStyle, LoginContainer, LogoAndText, Signup, Title } from "./Login.Styled";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

  function GoToRegister(){
    navigate('/usuarios')
  }


  return (
    <BackgroundPage>
      <LoginContainer>
        <LogoAndText>
          <Logo />
          <h2>Dashboard Kit</h2>
        </LogoAndText>
        <Title>Log In to Dashboard Kit</Title>
        <h3>Enter your email and password below</h3>
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
            <FormStyle>
              <div>
                <label htmlFor="login">*Login: </label>
                <Field name='login' placeholder='Username' />
                {errors.login && touched.login ? (<Errors>{errors.login}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">*Password: </label>
                <Field type='password' name='senha' placeholder='Password'/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <div>
                <p>*Campos Obrigatórios</p>
              </div>
              <ButtonFormStyle type="submit">Log In</ButtonFormStyle>
            </FormStyle>
          </Form>
        )}
        </Formik>
        <div>
          <p>Don’t have an account?</p>
          <Signup onClick={GoToRegister}>Sign up</Signup>
        </div>
      </LoginContainer>
    </BackgroundPage>
  )
}

export default Login;