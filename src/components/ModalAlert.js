import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

function ModalAlert() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! </Alert.Heading>
                <p>It seems you have put your nickname same as in your Pokemon list. Please use another nickname.</p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default ModalAlert
