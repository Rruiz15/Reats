import React from 'react';
import Select from 'react-select'
import ClientSearch from '../components/ClientSearch'
//styles 
import '../assets/styles/components/Client.scss'
//statics
import user from '../assets/static/user.png'
import phone from '../assets/static/phone.png'
import email from '../assets/static/email.png'
import location from '../assets/static/location.png'
import register from '../assets/static/register.png'
import dropdown from '../assets/static/dropdown.png'



const Client = () => {
    return (
        <div className="client">
            <div className="client__divTitle">
                <h3>Cliente</h3>
                <ClientSearch/>
            </div>
            <div className="client__container">
                <div className="client__user">
                    <img src={user} alt="user" />
                </div>
                <div className="client__info">
                    <h3>Robert Alejandro Ruiz Huerta</h3>
                    <div className="client__info--number">
                        <img src={phone} alt="phone" />
                        <p>994021020</p>
                    </div>
                    <div className="client__info--email">
                        <img src={email} alt="email" />
                        <p>rruiz2298@gmail.com</p>
                    </div>
                    <div className="client__info--direction">
                        <img src={location} alt="location" />
                        <p>Av Americo Vespucio 4641</p>
                    </div>
                    <div className="client__info--register">
                        <img src={register} alt="register" />
                        <p> 10 / 20 / 2021 </p>
                        <img src={dropdown} alt="dropdown" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Client;
