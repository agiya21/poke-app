/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import { css, jsx } from '@emotion/react'
function PokemonDetailPics(props) {
    const pokePics = props.pics

    return (
        <div css={css`
            padding-top : 12px; 
            padding-bottom : 12px;
            background-color : teal`}>

            {pokePics ? <img src={pokePics.front_default} alt="pokePicsFront" /> : null}
            {pokePics ? <img src={pokePics.back_default} alt="pokePicsBack" /> : null}
        
        </div>
    )
}

export default PokemonDetailPics