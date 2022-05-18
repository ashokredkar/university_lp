import React from 'react';
import './DepartCard.css';
import Tilt from 'react-tilt';

const DepartCard = ({ image, title }) => {
  return (
    <Tilt className="dCard Tilt">
        <img src={image} alt="depart_img" className=' Tilt-inners' />
        <h2 className="dCard_title Tilt-inner">{title}</h2>
    </Tilt>
  )
}

export default DepartCard