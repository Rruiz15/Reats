/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
//modules
import Home from '../containers/Home';
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
const Table = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Home>
        {
          initialState.tables.map((item) => <NavbarTable key={item.id} {...item} />)
        }
      </Home>
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
    </>
  );
};

export default Table;
