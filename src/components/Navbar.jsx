import React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../assets/styles/components/Navbar.scss';
//static
import Logo from '../assets/static/logo.png';
import Gear from '../assets/static/gear.png';
import Search from '../assets/static/search.png';

const Navbar = ({ children }) => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <div className='navbar__logo'>
          <img src={Logo} alt='' />
        </div>
      </Link>
      <div className='navbar__search'>
        <img src={Search} alt='search' />
        <input type='text' />
      </div>
      <div className='navbar__container'>
        {children}
      </div>

      <div className='navbar__settings'>
        <img src={Gear} alt='Gear' />
      </div>
    </div>

  );
};

export default Navbar;
