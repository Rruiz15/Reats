import React from 'react';
import { Link } from 'react-router-dom';
//styles
//import '../assets/styles/components/Notfound.scss'

const Notfound = () => (
    <section className="not-found">
        <h2 className="not-found__title">404</h2>
        <h3>Página no encontrada</h3>
        <Link to='/' > Regresar </Link>
    </section>

)

export default Notfound;
