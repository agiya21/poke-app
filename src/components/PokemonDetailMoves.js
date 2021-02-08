import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CustomToggle from './CustomToggle'

function PokemonDetailMoves(props) {
    const pokeMoves = props.moves

    return (
        <div>
            <Accordion>
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="0">
                            Pokemon Moves
                        </CustomToggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {
                                    pokeMoves ? pokeMoves.map(data => {
                                        const { move } = data
                                        return (
                                            <li>{move.name}</li>
                                        )
                                    }) : null
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card.Header>
                </Card>
            </Accordion>
        </div>
    )
}

export default PokemonDetailMoves