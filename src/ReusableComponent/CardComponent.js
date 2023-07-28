import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CardComponent({ style, bg, className, header, title, pairagraph,btnBg,btnName }) {
    return (
        <>
            <Card style={style} bg={bg} className={className}>
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {pairagraph}
                    </Card.Text>
                    {btnName && <Button variant={btnBg} >{btnName}</Button>}
                </Card.Body>
            </Card>

        </>
    )
}

export default CardComponent
