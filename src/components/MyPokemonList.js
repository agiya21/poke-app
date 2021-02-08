/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import MyLists from "./MyLists"
import { css, jsx } from '@emotion/react'

class MyPokemonList extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            nameList: [],
            nickList: [], 
            isAlertOpen : true
        }
    }

    openAlert = () => this.setState({ isAlertOpen: true })
    closeAlert = () => this.setState({ isAlertOpen: false })

    // Put all sessionStorage cache to nameList
    componentDidMount() {
        this.setState({
            nickList: Object.keys(sessionStorage),
            nameList: Object.values(sessionStorage)
        })
    }

    render() {
        return (
            <div css={css`text-align : center`}>
                <h3>My Pokemon List</h3>
                <MyLists nickname={this.state.nickList} names={this.state.nameList} />
            </div>
        )
    }
}

export default MyPokemonList