/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import Header from "./components/Header"
import PokemonList from "./components/PokemonList"
import MyPokemonList from "./components/MyPokemonList"
import { BrowserRouter as Router, Route } from "react-router-dom"
import PokemonDetail from "./components/PokemonDetail"
import { css, jsx } from '@emotion/react'
import NavBarFooter from "./components/NavBarFooter"

function App() {

  return (
    <div css={{
      backgroundColor: "white"
    }}>

      <h1 css={{
        color: "white",
        backgroundColor: "#e74c3c",
        padding: "10px",
        textAlign: "center"
      }}>Pokemon App</h1>

      <Router>
        <main css={css`
          padding-bottom : 65px`}>
          <Route exact path="/">
            <PokemonList />
          </Route>

          <Route path="/MyPokemonList">
            <MyPokemonList />
          </Route>

          <Route path="/PokemonDetail/:name" component={PokemonDetail} />
        </main>
        <NavBarFooter />
      </Router>

    </div>

  )
}



export default App
