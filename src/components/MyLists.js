import React from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

function MyLists(props) {
    const pokeNicks = props.nickname

    // Fix this for deleting pokemon
    const pokeRelease = (release) => {
        sessionStorage.removeItem(release)
    }

    const nick = pokeNicks.length > 0 ? pokeNicks.map(pokenick => {
        let linkUrl = "/PokemonDetail/" + sessionStorage.getItem(pokenick)
        return (
            <div>
                <Link to={linkUrl}>
                    <li><h3>{pokenick}</h3></li>
                </Link>
                <h4>Species : {sessionStorage.getItem(pokenick)}</h4>
            </div>
        )
    }) : null


    return (
        <div>
            <ul>
                {nick}
            </ul>
        </div>
    )
}

export default MyLists