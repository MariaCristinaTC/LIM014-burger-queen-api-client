import React from 'react'
import { Link, NavLink } from "react-router-dom";

/*- to -> para que vaya al link.
- NavLink -> Reemplaza al link y llama una clase activa, para que se marque donde se busca, se usa exact para q solo se seleccione la ruta raíz, se usa la el activeClassName="active" (19)
*/
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" ClassName="active"> Inicio</NavLink>
                </li>
                <li>
                    <NavLink exact to="/mesero" ClassName="active"> Mesero</NavLink>
                </li>
                <li>
                    <Link exact to="/cocina"> Cocina</Link>
                </li>
                <li>
                    <Link exact to="/administrador"> Administrador</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar