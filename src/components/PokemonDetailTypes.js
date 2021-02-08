import React from "react"
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import CustomToggle from "./CustomToggle"

function PokemonDetailTypes(props) {

    const pokeTypes = props.types

    return (
        <div>
            <Accordion>
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="0">
                            Pokemon Types
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul>
                                {
                                    pokeTypes ? pokeTypes.map(data => {
                                        const { type } = data
                                        return (
                                            <li>{type.name}</li>
                                        )
                                    }) : null
                                }
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default PokemonDetailTypes