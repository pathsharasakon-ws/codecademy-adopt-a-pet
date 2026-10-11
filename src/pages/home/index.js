import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import { useParams, Link } from 'react-router-dom';
// import useParams
// import Link

const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { type } = useParams(); // Fix me!

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPets(type);
        setData(petsData);
        setError(false);
      } catch (e) {
        setError(true);
      }
    }

    getPetsData();
  }, [type]);

  if (error) {
    return <p role="alert">Unable to load pets. Please try again.</p>;
  }

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Hero />
      <h3>
        <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
            <Link // Change me to a Link!
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  {
                    <img
                      className="pet-image"
                      src={
                        animal.photos[0]?.medium ||
                        '/missing-animal.png'
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
            </Link> // Don't forget to change me!
          ))}
        </div>
      ) : (
        <p className="prompt">No {type}s available for adoption now.</p>
      )}
    </div>
  );
};

export default HomePage;
