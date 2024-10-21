import React, { useState, useEffect } from 'react';
import { Skills } from './Skills';
import { Portafolio } from './Portafolio';
import { DescriptionPokemonIndex } from './DescriptionPokemonIndex';
import axios from 'axios';

export const Inicio = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [primaryType, setPrimaryType] = useState(''); 

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);

    if (pokemon && pokemon.types && pokemon.types.length > 0) {
      setPrimaryType(pokemon.types[0].type.name.toLowerCase());
    } else {
      setPrimaryType('');
    }
  };

  useEffect(() => {
    const fetchDefaultPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/wartortle');
        const defaultPokemon = response.data;
        setSelectedPokemon(defaultPokemon);

        if (defaultPokemon.types && defaultPokemon.types.length > 0) {
          setPrimaryType(defaultPokemon.types[0].type.name.toLowerCase());
        }
      } catch (error) {
        console.error('Error fetching default Pokémon:', error);
      }
    };

    fetchDefaultPokemon();
  }, []);

  return (
    <div className='wrapper'>
      <div className={`inicio_container row ${primaryType}`}>
        <div className='pokemon_card-description col-12'>
          <div className="container_description">
            <DescriptionPokemonIndex pokemon={selectedPokemon} />
          </div>
        </div>
      </div>
      <Skills onSelectPokemon={handleSelectPokemon} />
      <Portafolio/>
    </div>
  );
};
