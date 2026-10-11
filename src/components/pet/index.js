import React from 'react';

const Pet = ({ animal }) => {
  return (
    <a
      key={animal.id}
      href={`/${animal.type.toLowerCase()}/${animal.id}`}
      className="pet"
    >
      <article>
        <div className="pet-image-container">
          {
            <img
              className="pet-image"
              src={
                animal.photos[0]?.medium || '/missing-animal.png'
              }
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = '/missing-animal.png';
              }}
              alt=""
            />
          }
        </div>
        <h3>{animal.name}</h3>
        <p>Breed: {animal.breeds.primary}</p>
        <p>Color: {animal.colors.primary}</p>
        <p>Gender: {animal.gender}</p>
      </article>
    </a>
  );
};

export default Pet;
