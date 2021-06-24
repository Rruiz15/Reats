import React from 'react';
//styles
import '../assets/styles/components/Status.scss';

const Status = ({ children }) => {
  return (
    <div className='status'>
      <div className='status__divTitle'>
        <h3>Status</h3>
      </div>
      <div className='status__container'>
        {children}
      </div>
    </div>
  );
};

export default Status;
