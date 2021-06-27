/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
//modules
import Home from '../containers/Home';
import Client from '../components/Client';
import Status from '../components/Status';
import StatusItem from '../components/StatusItem';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Order from '../components/Order';
import OrderItem from '../components/OrderItem';
import MenuSubItem from '../components/MenuSubItem';
//styles
import '../assets/styles/App.scss';
import '../assets/styles/Vars.scss';


const Table = props => {
  const { clients, menu, bill , subTotal, total } = props;
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
          menu.map((item) => 
            <MenuItem key={item.id} {...item}>
              { item.list.map((subItem) => 
                <MenuSubItem key={`${item.id}.${subItem.id}`} subname={item.name} {...subItem} />)
              }
            </MenuItem>)
        }
      </Menu>
      <Order subTotal={subTotal} total={total}>
        { 
          bill.map((item) => <OrderItem key={item.id} {...item}/>)
        }
      </Order>
    </>
  );
};

const mapStateToProps = state => {
  return {
    clients: state.clients,
    menu: state.menu,
    bill: state.bill,
    subTotal: state.subTotal,
    total: state.total,
  }
}

export default connect(mapStateToProps,null)(Table);
