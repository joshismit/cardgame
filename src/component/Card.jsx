import React, { useEffect, useState } from "react";
import "./Card.css";
import imgVal from "../assets/image";

const Card = () => {
  const [shuffleImage, setShuffleImage] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const shuffledPairs = [...imgVal].sort(() => Math.random() - 0.5);
    setShuffleImage(shuffledPairs);
  }, []);

  const handleClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (shuffleImage[firstIndex] === shuffleImage[secondIndex]) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="container">
      {shuffleImage.map((img, index) => (
        <div
          key={index}
          className={`card ${
            flippedCards.includes(index) || matchedCards.includes(index)
              ? ""
              : "flipped"
          }`}
          onClick={() => handleClick(index)}
        >
          <div className="card-inner">
            <div className="card-back"></div>
            <div className="card-front">
              <img src={img} alt={`Card ${index}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
