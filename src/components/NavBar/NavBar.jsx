import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

function NavBar(){

    return (
        
        <nav className="NavBar">

            <h1 className="nombreSitio" >Atlas Gaming</h1>
            <a href="">Playtation</a>
            <a href="">Xbox</a>
            <a href="">Nintendo</a>
            <CartWidget/>
        </nav>


    )
}

export default NavBar