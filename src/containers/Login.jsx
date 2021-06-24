import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
//styles
import '../assets/styles/components/Login.scss';

const Login = props => {
  const [ form, setValues ] = useState({
    email:'',
  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.loginRequest(form)
    props.history.push('/')
  }


  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesion</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' defaultValue='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
            <p className='login__container--register'>
              No tienes ninguna cuenta
              <Link to='/register'> Regístrate</Link>
            </p>
          </div>
        </form>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
}

export default connect(null,mapDispatchToProps)(Login);
