import React, { useState } from 'react';
import './flipCard.css'; // Import the CSS file

const FlipCard = ({ frontImage, backInfo }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    if (!isFlipped) {
        return (
            <div className="flip-card-container" onClick={handleClick}>

                {/* The ternary operator adds the 'flipped' class when isFlipped is true */}
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>

                    {/* Front side of the card with the image */}
                    <div className="flip-card-front">
                        <img
                            src={frontImage}
                            alt="Front of card"
                            className="card-image"
                        />
                    </div>

                    {/* Back side of the card with information */}
                    {/* <div className="flip-card-back">
                        <div className="card-info">
                            {backInfo}
                        </div>
                    </div> */}
                </div>
            </div>
        );

    } else {
                return (
            <div className="flip-card-container" onClick={handleClick}>

                {/* The ternary operator adds the 'flipped' class when isFlipped is true */}
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>

                    {/* Front side of the card with the image */}
                    {/* <div className="flip-card-front">
                        <img
                            src={frontImage}
                            alt="Front of card"
                            className="card-image"
                        />
                    </div> */}

                    {/* Back side of the card with information */}
                    <div className="flip-card-back">
                        <div className="card-info">
                            {backInfo}
                        </div>
                    </div>
                </div>
            </div>
        );

    }

};

export default FlipCard;