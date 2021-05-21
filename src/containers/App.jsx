import React from 'react';
//modules 
import Navbar from '../components/Navbar'
import NavbarTable from '../components/NavbarTable'
import Client from '../components/Client'
import Status from '../components/Status'
import StatusItem from '../components/StatusItem'
import Menu from '../components/Menu'
import MenuItem from '../components/MenuItem'
import Order from '../components/Order'
import OrderItem from '../components/OrderItem'
//styles
import '../assets/styles/App.scss'
import '../assets/styles/Vars.scss'

const App = () => {
    return(
        <div className='App'>
            <Navbar>
                <NavbarTable/>
            </Navbar>
            <Client/>
            <Status>
                <StatusItem/>
                <StatusItem/>
                <StatusItem/>
            </Status>
            <Menu>
                <MenuItem/>
            </Menu>
            <Order>
                <OrderItem/>
                <OrderItem/>
            </Order>
        </div>    
    )
}

export default App;