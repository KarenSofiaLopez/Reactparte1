import React from 'react';
const Nav = (props) => {
    return(
        <nav>
        <ul className="holder">
            <li><a class="activo" href="index.html">Home</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="novedades.html">Servicios</a></li>
            <li><a href="contacto.html">Contacto</a></li>

    
        </ul>
    </nav>

    );
}

export default Nav;