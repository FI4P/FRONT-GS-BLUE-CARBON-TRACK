// src/components/VesselCard.js
import React from 'react';
import "./styles.scss"

const VesselCard = ({ vessels }) => {
  return (
    <div className="vessel-cards">
      {vessels.map((vessel, index) => (
        <div className="vessel-card" key={index}>
          <h2 className='vessel-name'>{vessel.name ? vessel.name : "Sem indentificação"}</h2>
          <div className="vessel-details">
            <p><strong>Intensidade:</strong> {vessel.intensity}</p>
            <p><strong>Total geral:</strong> {vessel.total}</p>
            <p><strong> Total de Tank-to-Wheel (TTW):</strong> {vessel.ttw}</p>
            <p><strong>Total de (WTT):</strong> {vessel.wtt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VesselCard;
