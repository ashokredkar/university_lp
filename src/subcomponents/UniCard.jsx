import React from 'react';
import './UniCard.css';

const UniCard = ({ image, title, subtitle }) => {
  return (
    <div className="uCard">
      <img src={image} alt="uni_card" />
      <div className="uCardInfo">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <span>Read More...</span>
      </div>
    </div>
  )
}

export default UniCard