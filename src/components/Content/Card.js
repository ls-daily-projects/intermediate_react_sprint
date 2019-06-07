import React from "react"
import { shape, string } from "prop-types"

const Card = ({ card }) => {
    return (
        <div className="card">
            <div className="headline">{card.headline}</div>
            <div className="author">
                <div className="img-container">
                    <img src={card.img} alt={card.headline.toLowerCase()} />
                </div>
                <span>By {card.author}</span>
            </div>
        </div>
    )
}

// Make sure to include PropTypes.
Card.propTypes = {
    card: shape({
        headline: string.isRequired,
        tab: string.isRequired,
        img: string.isRequired,
        author: string.isRequired
    })
}

export default Card
