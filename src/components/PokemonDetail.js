/** @jsxRuntime classic /
/* @jsx jsx */
import React from "react"
import CatchPokemon from "./CatchPokemon"
import PokemonDetailMoves from "./PokemonDetailMoves"
import PokemonDetailPics from "./PokemonDetailPics"
import PokemonDetailTypes from "./PokemonDetailTypes"
import { css, jsx } from '@emotion/react'

class PokemonDetail extends React.Component {

    constructor() {
        super()
        this.state = {
            loading: false,
            pokemonDetails: []
        }
    }

    componentDidMount() {
        const pokeName = this.props.match.params.name
        const linkUrl = "http://pokeapi.co/api/v2/pokemon/" + pokeName
        this.setState({ loading: true })
        fetch(linkUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    pokemonDetails: data
                })
            })
    }


    render() {
        const { pokemonDetails } = this.state

        // Generate catch pokemon percentage
        const catchPercentage = Math.floor(Math.random() * 100)

        return (
            <div css={css`text-align : center`}>
                {this.state.loading === true && <h2>Loading...</h2>}
                {/** Rendering Pokemon Pics. Front and Back. */}
                <PokemonDetailPics pics={pokemonDetails.sprites} />

                <div css={css`text-transform: capitalize`}>
                    <h2>{pokemonDetails.name}</h2>
                </div>
                <p>Weight : {pokemonDetails.weight}</p>

                {/** Rendering Pokemon Types and Moves */}
                <PokemonDetailTypes types={pokemonDetails.types} />
                <PokemonDetailMoves moves={pokemonDetails.moves} />

                {this.state.loading === true ? <h3>Loading...</h3> : <h3> Catch success percentage : {catchPercentage} % </h3>}

                {/** Rendering Catch button */}
                <CatchPokemon name={pokemonDetails.name} catchPercent={catchPercentage} />

            </div>
        )
    }
}


export default PokemonDetail