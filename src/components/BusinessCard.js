import React from 'react'

const BusinessCard = ({Values}) => {

    const {Name,Title,Company,City,State,Phone,Email,Website} = Values;
  return (
    <article className="BusinessCard">
    <h3 className="Name">{Name}</h3>
    <div className="Position">
      <span>{Title}</span>, <span>{Company}</span>
    </div>
    <div className="Location">
      <span>{City}</span>, <span>{State}</span>
    </div>
    <p className="Phone">{Phone}</p>
    <p className="Email">{Email}</p>
    <p className="Website">{Website}</p>
  </article>
    
  );
};

export default BusinessCard;
