/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
//modules
import Navbar from '../components/Navbar';
import NavbarTable from '../components/NavbarTable';
import Client from '../components/Client';
import Status from '../components/Status';
import StatusItem from '../components/StatusItem';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Order from '../components/Order';
import OrderItem from '../components/OrderItem';
import useInitialState from '../hooks/UseInitialState';
//styles
import '../assets/styles/App.scss';
import '../assets/styles/Vars.scss';

const API = 'http://localhost:3000/initialState';
const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Navbar>
        {
          initialState.tables.map((item) => <NavbarTable key={item.id} {...item} />)
        }
      </Navbar>
      <Client info={initialState.clients} />
      <Status>
        <StatusItem />
        <StatusItem />
        <StatusItem />
      </Status>
      <Menu>
        {
          initialState.menu.map((item) => <MenuItem key={item.id} {...item} />)
        }
      </Menu>
      <Order>
        <OrderItem />
        <OrderItem />
      </Order>
    </div>
  );
};

export default App;
