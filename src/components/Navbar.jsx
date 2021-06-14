import { 
    Link,
    NavLink 
} from "react-router-dom";
import useAuth from "../auth/useAuth";

/*- to -> para que vaya al link.
- NavLink -> Reemplaza al link y llama una clase activa, para que se marque donde se busca, se usa exact para q solo se seleccione la ruta raíz, se usa la el ClassName="active" (19)
*/
const Navbar = () => {
    const auth = useAuth();

    return (
        <nav className="navigation">
            <ul className="navigation_list">
                {/* Para restringir ⬇ rutas, si el usuario no  esta logeado se muestra los siguientes elmentos*/}
                {!auth.isLogged() && (
                    <li className="navigation__list__item">
                        <Link exact to="/" ClassName="active">
                         Login
                        </Link>
                    </li>  
                )}

                {/*  como son varios elementos y solo se puede retornar un se usa:   <>  </> ->> es un fragmente que envuelve a los elementos
               Para restringir ⬇ rutas, si el usuario esta logeado se muestra los elmentos:*/}
                {auth.isLogged() && (
                    <>
                        <li>
                            <NavLink to={`/mesero`} ClassName="active">
                                Mesero
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/cocina`} ClassName="active">
                                Cocina
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={`/administrador`} ClassName="active">
                                Administrador
                            </NavLink>
                        </li>
                       
                        <li>
                            <button onClick={auth.logout}>Salir</button>
                        </li>
            
                    </>
                )}
            </ul>
           
            
        </nav>
    );
}

export default Navbar
