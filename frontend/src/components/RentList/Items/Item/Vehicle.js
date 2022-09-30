import React from 'react'

function Vehicle({bike}) {
    const {name, images} = bike;
  return (
    <div>
      <div className="detail">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Vehicle;