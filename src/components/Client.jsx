/* eslint-disable react/state-in-constructor */
import React from 'react';
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

class Client extends React.Component {
    state = {
      name: ' ',
      email: ' ',
      phone: ' ',
      location: ' ',
      register: ' ',
    };

    handleInfo = (selectOpc) => {
      this.setState({
        name: selectOpc.value.name,
        email: selectOpc.value.email,
        phone: selectOpc.value.phone,
        location: selectOpc.value.direction,
        register: selectOpc.value.history,
      });
      console.log(selectOpc);
    };

    render() {
      const { info } = this.props;
      const { name, email, phone, location, register } = this.state;
      return (
        <div className='client'>
          <div className='client__divTitle'>
            <h3>Cliente</h3>
            <div className='clientsearch'>
              <img src={Search} alt='Search' />
              <Select className='react-select-container' classNamePrefix='react-select' placeholder='Buscar' options={info} onChange={this.handleInfo} />
            </div>
          </div>
          <div className='client__container'>
            <div className='client__user'>
              <img src={User} alt='user' />
            </div>
            <div className='client__info'>
              <h3>{name}</h3>
              <div className='client__info--number'>
                <img src={Phone} alt='phone' />
                <p>{phone}</p>
              </div>
              <div className='client__info--email'>
                <img src={Email} alt='email' />
                <p>{email}</p>
              </div>
              <div className='client__info--direction'>
                <img src={Location} alt='location' />
                <p>{location}</p>
              </div>
              <div className='client__info--register'>
                <img src={Register} alt='register' />
                <p>{register}</p>
              </div>
            </div>
          </div>

        </div>
      );
    }
}

export default Client;
