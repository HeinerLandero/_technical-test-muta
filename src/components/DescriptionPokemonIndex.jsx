import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DescriptionPokemonIndex = ({ pokemon }) => {
  const [speciesData, setSpeciesData] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemon) {
      const fetchSpeciesData = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
          const species = response.data;

          setSpeciesData(species);

          if (species.evolution_chain) {
            const evolutionResponse = await axios.get(species.evolution_chain.url);
            setEvolutionChain(evolutionResponse.data);
          }
        } catch (error) {
          console.error('Error fetching species data:', error);
          setError('Error fetching Pokémon species data');
        }
      };

      fetchSpeciesData();
    }
  }, [pokemon]);

  if (!pokemon || !speciesData) {
    return <div>Loading Pokémon data...</div>;
  }

  const flavorText = speciesData.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  )?.flavor_text || 'No se encontró la descripción en español.';

  const habitat = speciesData.habitat ? speciesData.habitat.name : 'Desconocido';

  const renderEvolutionChain = () => {
    if (!evolutionChain) return 'Cargando cadena evolutiva...';

    const evolutionNames = [];
    let current = evolutionChain.chain;

    while (current) {
      evolutionNames.push(current.species.name);
      current = current.evolves_to[0];
    }

    return evolutionNames.join(' → ');
  };

  return (
      <div className="pokemon-main-description">
        <h2>{pokemon.name}</h2>
        <img
          src={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          className="main-image"
        />

        <div className="pokemon-details">
          <h3>Review:</h3>
          <p>{flavorText}</p>

          <h3>Habitat:</h3>
          <p>{habitat}</p>

          <h3>Evolutionary Chain:</h3>
          <p>{renderEvolutionChain()}</p>
        </div>
      </div>
  );
};
