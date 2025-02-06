import React, { useEffect, useState } from "react";
import "./Card.css";
import imgVal from "../assets/image";

const Card = () => {
  const [shuffleImage, setShuffleImage] = useState([]);
  const [flipCards, setFlipCards] = useState([]);
  const [toggleCard, setToggleCard] = useState(false);

  useEffect(() => {
    const shuffled = [...imgVal].sort(() => Math.random() - 0.5);
    setShuffleImage(shuffled);
  }, []);

  const handleClick = (index) => {
    setFlipCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container">
      {shuffleImage.map((img, index) => (
        <div
          key={index}
          className={`card ${flipCards.includes(index) ? "" : "flipped"}`}
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
