/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import { css, jsx } from '@emotion/react'

function Lists(props) {
    const listName = props.details
    return (
        <div>
            {
                listName.length > 0 ? listName.map(pokes => {
                    const { name } = pokes
                    let linkUrl = "/PokemonDetail/" + name
                    return (
                        <div css={css` text-align : center`}>
                            <Link to={linkUrl}>
                                <Button><h3 css={css`text-transform : capitalized`}>{name}</h3></Button>
                            </Link>
                            <br></br>
                            <br></br>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default Lists