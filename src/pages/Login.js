import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import styles from "../styled/Login.module.scss"
import { motion } from 'framer-motion'
import logologin from "../styled/Images/login.png"
import { loginEmailPassAsync, loginGoogle } from '../redux/actions/actionLogin'
import googleIcon from "../styled/Images/google.png"

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Ingrese un correo válido').required('Este campo es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(50, 'La contraseña debe tener como máximo 50 caracteres')
    .required('Este campo es obligatorio'),
})

const Login = () => {
  const dispatch = useDispatch()

  //FUNCION PARA ENVIAR LOS DATOS DEL FORMULARIO
  const handleSubmit = values => {
    localStorage.setItem('email', values.email)
    dispatch(loginEmailPassAsync(values.email, values.password))
  }

  //FUNCION PARA INICIAR SESION CON GOOGLE
  const handleGoogle = () => {
    dispatch(loginGoogle())
  }

  return (
    <div className={styles.login_container}>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.login_img}
      >
        <img src={logologin} alt='mewto' />
      </motion.div>

      <motion.div
        className={styles.login_container__form}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className={styles.login_form}>
          <Formik
            initialValues={{
              nombre: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              handleSubmit(values)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <h1>Iniciar sesión</h1>
                </div>

                <div className={styles.login_form__inputs}>
                  <label>Email</label>
                  <Field name='email' type='text' />
                  {errors.email && touched.email ? (
                    <div className={styles.login_error}>{errors.email}</div>
                  ) : null}
                </div>

                <div className={styles.login_form__inputs}>
                  <label>Contraseña</label>
                  <Field name='password' type='password' autoComplete='off' />
                  {errors.password && touched.password ? (
                    <div className={styles.login_error}>{errors.password}</div>
                  ) : null}
                </div>

                <button className={styles.login_continue__btn} type='submit'>
                  Continuar
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className={styles.bar}></div>

        {/* <div className={styles.login_social__btn}>
          <button style={{ backgroundColor: '#db4a39' }} onClick={handleGoogle}>
            <img src={googleIcon} alt='google' />
          </button>
        </div> */}

        <div className={styles.login_change}>
          <h1>
            <span>¿Eres nuevo?</span>
          </h1>
          <Link style={{ textDecoration: 'none' }} to='/register'>
            <button>Crea una cuenta</button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
