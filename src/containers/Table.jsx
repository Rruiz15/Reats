/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
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

const Table = props => {
  const { clients, menu } = props;
  return (
    <>
      <Home/>
      <Client info={clients} />
      <Status>
        <StatusItem />
        <StatusItem />
        <StatusItem />
      </Status>
      <Menu>
        {
          menu.map((item) => <MenuItem key={item.id} {...item} />)
        }
      </Menu>
      <Order>
        <OrderItem />
        <OrderItem />
      </Order>
    </>
  );
};

const mapStateToProps = state => {
  return {
    clients: state.clients,
    menu: state.menu,
  }
}

export default connect(mapStateToProps,null)(Table);
