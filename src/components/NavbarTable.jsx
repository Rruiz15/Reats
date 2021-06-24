import React from 'react';
//styles
import '../assets/styles/components/NavbarTable.scss';
//statics
import table from '../assets/static/table.png';

const NavbarTable = ({ id }) => {
  return (
    <div className='table'>
      <img src={table} alt='table' />
      <h5 className='table--number'>{id}</h5>
    </div>
  );
};

export default NavbarTable;
