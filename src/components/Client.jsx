import React, { useState }  from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
//styles
import '../assets/styles/components/Client.scss';
import '../assets/styles/components/ClientSearch.scss';
//statics
import User from '../assets/static/user.png';
import Phone from '../assets/static/phone.png';
import Email from '../assets/static/email.png';
import Location from '../assets/static/location.png';
import Register from '../assets/static/register.png';
import Search from '../assets/static/search.png';

const Client = props => {
  const { clients } = props
  const [clientSelected, setValues] = useState({
    name : " ",
    email: " ",
    phone: " ", 
    direction: " ",
    register: " ",
  })

  const handleSelect = event => {
    setValues({
      ...clientSelected,
      name: event.value.name,
      email: event.value.email,
      phone: event.value.phone,
      direction: event.value.direction,
      register: event.value.history,
    })
  }
  return (
      <div className='client'>
        <div className='client__divTitle'>
          <h3>Cliente</h3>
          <div className='clientsearch'>
            <img src={Search} alt='Search'/>
            <Select className='react-select-container' classNamePrefix='react-select' placeholder='Buscar' options={clients} onChange={handleSelect} />
          </div>
        </div>
        <div className='client__container'>
          <div className='client__user'>
            <img src={User} alt='user' />
          </div>
          <div className='client__info'>
            <h3>{clientSelected.name}</h3>
            <div className='client__info--number'>
              <img src={Phone} alt='phone' />
              <p>{clientSelected.phone}</p>
            </div>
            <div className='client__info--email'>
              <img src={Email} alt='email' />
              <p>{clientSelected.email}</p>
            </div>
            <div className='client__info--direction'>
              <img src={Location} alt='location' />
              <p>{clientSelected.direction}</p>
            </div>
            <div className='client__info--register'>
              <img src={Register} alt='register' />
              <p>{clientSelected.register}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    clients: state.clients
  }
}

export default connect(mapStateToProps,null)(Client);
