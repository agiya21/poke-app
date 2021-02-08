/** @jsxRuntime classic /
/* @jsx jsx */


import React from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import { css, jsx } from '@emotion/react'

class CatchPokemon extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            isAlertOpen: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    openModal = () => this.setState({ isOpen: true })
    closeModal = () => this.setState({ isOpen: false })

    openAlert = () => this.setState({ isAlertOpen: true })
    closeAlert = () => this.setState({ isAlertOpen: false })

    handleSubmit(e) {
        e.preventDefault()
        // get form input value
        const { nicks } = e.target
        const pokeNames = this.props.name

        // compare if there is a same name in sessionStorage
        // if none, add name to sessionStorage
        console.log(pokeNames)
        let keys = Object.keys(sessionStorage)

        if (keys.length > 0) {
            for (let key of keys) {
                if (key === nicks.value) {
                    console.log("same name in object keys")
                } else {
                    sessionStorage.setItem(nicks.value, pokeNames)
                }
            }
        } else {
            sessionStorage.setItem(nicks.value, pokeNames)
        }
    }

    render() {
        const pokeName = this.props.name
        const catchPercentage = this.props.catchPercent
        return (
            <div>
                <Button css={css`border-radius : 18px`} variant="primary" onClick={this.openModal}>Catch the pokemon</Button>
                {
                    this.state.isOpen && catchPercentage > 50 ?
                        <Modal show={this.state.isOpen} onHide={this.closeModal}>
                            <Form onSubmit={this.handleSubmit}>
                                <ModalHeader closeButton>
                                    <ModalTitle>Catch Successful! Give a nickname to your {pokeName}</ModalTitle>
                                </ModalHeader>
                                <ModalBody>
                                    <Form.Group>
                                        <Form.Label>Nickname</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nicks"
                                            placeholder="You can name it like Marco, Foobar, etc."
                                            required
                                        />
                                    </Form.Group>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="submit">Add to My Pokemon List</Button>
                                </ModalFooter>
                            </Form>
                        </Modal>
                        :
                        <Modal show={this.state.isOpen} onHide={this.closeModal}>
                            <ModalHeader>
                                <ModalTitle>Sorry...</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <p>You failed to catch the pokemon</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="primary" onClick={this.closeModal} >Close</Button>
                            </ModalFooter>
                        </Modal>
                }
            </div>
        )
    }
}

export default CatchPokemon