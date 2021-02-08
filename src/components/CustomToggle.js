/** @jsxRuntime classic /
/* @jsx jsx */
//import React from "react"
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import Button from 'react-bootstrap/Button'
import { css, jsx } from '@emotion/react'


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button css={css`
            background-color: blueviolet;
            border: none;
            border-radius: 18px;`}
            onClick={decoratedOnClick}>
            {children}
        </Button>
    );
}

export default CustomToggle