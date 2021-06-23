import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavbarTable from '../components/NavbarTable';
//styles
import '../assets/styles/App.scss';
import '../assets/styles/Vars.scss';

const Home = props => {
  const { tables } = props
  return (
    <>
      <Navbar>
        {
          tables.map((item) => 
            <Link to={`/table/${item.id}`}>
              <NavbarTable key={item.id} {...item} />
            </Link>)
        }
      </Navbar>
    </>
  );
};

const mapStateToProps = state => {
  return{
    tables: state.tables,
  }
}

export default connect(mapStateToProps,null)(Home);
