import React, { useState, useEffect } from 'react';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';
// Import useSearchParams
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {

  // Get searchParams object from useSearchParams
  const [searchParams] = useSearchParams();

  const petNameToFind = searchParams.get('name') ?? '';  // Get query parameter using searchParams object

  const [pets, setPets] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPets('', petNameToFind);
        setPets(petsData);
        setError(false);
      } catch (e) {
        setPets([]);
        setError(true);
      }
    }

    getPetsData();
  }, [petNameToFind]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${petNameToFind}`} />

      <h3>Pets available for adoption near you</h3>

      {error && <p role="alert">Unable to load pets. Please try again.</p>}
      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
