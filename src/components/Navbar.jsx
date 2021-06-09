import React from 'react'
import { Link, NavLink } from "react-router-dom";

/*- to -> para que vaya al link.
- NavLink -> Reemplaza al link y llama una clase activa, para que se marque donde se busca, se usa exact para q solo se seleccione la ruta raíz, se usa la el ClassName="active" (19)
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

                <li>
                    <Link exact to="/categories"> Categorias</Link>
                </li>

                <li>
                    <Link exact to="/login"> Login</Link>
                </li>
                <li>
                    <Link exact to="/register"> Register </Link>
                </li>
                <li>
                    <Link exact to="/dashboard"> Dashboard</Link>
                </li>
                <li>
                    <Link exact to="/payments"> Payments</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
