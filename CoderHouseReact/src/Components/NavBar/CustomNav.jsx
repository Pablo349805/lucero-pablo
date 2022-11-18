import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

const {Item} = Nav

const CustomNav = () => {
    return ( 
        <Nav>
            <Item className="d-flex justify-content-end">
                <Link exact to="/productos/electronics" className="mx-3 text-muted text-decoration-none">electronica</Link>
                <Link exact to="/productos/jewelery" className="mx-3 text-muted text-decoration-none">joyeria</Link>
                <Link exact to="/productos/women's clothing" className="mx-3 text-muted text-decoration-none">ropa de mujer</Link>
                <Link exact to="/productos/men's clothing" className="mx-3 text-muted text-decoration-none">ropa de hombre</Link>
            </Item>
        </Nav>
     );
}
 
export default CustomNav;