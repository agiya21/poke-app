import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Pokemon List</Link></li>
                    <li><Link to="/MyPokemonList">My Pokemon List</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header