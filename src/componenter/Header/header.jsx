
import { Link } from "react-router-dom"
import "./header.css"
export function Header(){
    return (

    <header>
        <nav>
            <ul className="nav-ul">
            <li className="nav-button-list">
                <Link className="nav-button" to="/">HOME</Link></li>
            <li className="nav-button-list">
                <Link className="nav-button" to="/about">ABOUT</Link></li>
            <li className="nav-button-list">
                <Link className="nav-button" to="/projects">PROJECTS</Link></li>
            <li className="nav-button-list">
                <Link className="nav-button" to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    </header>

    )
}
