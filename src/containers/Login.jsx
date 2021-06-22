import React from 'react';
//styles
import '../assets/styles/components/Login.scss';

const Login = () => {
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesion</h2>
        <form className='login__container--form' action=''>
          <input
            className='input'
            type='text'
            placeholder='Correo'
          />
          <input
            className='input'
            type='password'
            placeholder='Contraseña'
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
              <a to='/register'> Regístrate</a>
            </p>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Login;
