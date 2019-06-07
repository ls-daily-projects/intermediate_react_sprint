import React from "react"
import uuid from "uuid/v4"
import { array } from "prop-types"

import Card from "./Card"

const Cards = ({ cards }) => {
    return (
        <div className="cards-container">
            {cards.map(card => (
                <Card key={uuid()} card={card} />
            ))}
        </div>
    )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
    cards: array
}

export default Cards
