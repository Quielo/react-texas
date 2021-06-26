
import React, { useState, } from "react";
import Card from "./hands";
import "./deck.css"


const Decker = ({ className, path, title, flipped, children }) => {
    const [cards] = useState([]);
    
    return (
        <div className={['deck', className].filter(Boolean).join(' ')}>
            {cards.length === 0 ? (
                <div>Loading ... </div>
            ) : (
                <div>
                    <h2>{title}</h2>
                    <div className="deck">
                        {cards.map((card, index) => {
                            const number = card.slice(0, -1);
                            const symbol = card.slice(-1);
                            const flippedCards = parseInt(flipped, 10) > index
                            return <Card {...{ symbol, number, key: index, flipped: flippedCards }} />
                        })}
                    </div>
                    {children}
                </div>
            )}
        </div>
    );
    //}
}

export default Decker;