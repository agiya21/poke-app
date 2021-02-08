/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { css, jsx } from '@emotion/react'

function NavBarFooter() {
    return (
        <footer>
            <Navbar bg="light" fixed="bottom" className="justify-content-center">
                <Nav>
                    <Nav.Item css={css`
                        padding : 10px`}>
                        <Link to="/"><b>Pokemon List</b></Link>
                    </Nav.Item>
                    <Nav.Item css={css`
                        padding : 10px`}>
                        <Link to="/MyPokemonList"><b>My Pokemon List</b></Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </footer>
    )
}

export default NavBarFooter