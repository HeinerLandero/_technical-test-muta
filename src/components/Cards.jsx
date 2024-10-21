import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Badge from './Badge';
import VanillaTilt from 'vanilla-tilt';
import { GiWeight } from "react-icons/gi";
import { CiRuler } from "react-icons/ci";
import { Slider } from '@mui/material';

export const Cards = ({ onSelectPokemon }) => { 
  const [pokemons, setPokemons] = useState([]);
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [closing, setClosing] = useState(false); 

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const tiltElements = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(tiltElements, {
      max: 25,
      speed: 600,
      glare: true,
      "max-glare": 0.5,
    });

    return () => {
      tiltElements.forEach(el => el.vanillaTilt.destroy());
    };
  }, [pokemons]);

  const toggleModal = (pokemon) => {
    if (isOpen) {
      setClosing(true); 
      setTimeout(() => {
        setIsOpen(false); 
        setClosing(false); 
        setSelectedPokemon(null);
      }, 300);
    } else {
      setSelectedPokemon(pokemon);
      onSelectPokemon(pokemon); 
      setIsOpen(true);
    }
  };

  return (
    <section className="page card-1-page">
      <div className="cards">
        {pokemons.map((pokemon) => {
          let primaryType = pokemon.types[0].type.name.toLowerCase();
          return (
            <label key={pokemon.name} id={pokemon.name} className='content_card'>
              <div 
                className={`poke_card tilt-card front ${primaryType}`}
                onClick={() => toggleModal(pokemon)}
              >
                <span className={`poke-id id-${primaryType}`}>{pokemon.id}</span>
                <figure className='container_img-pokemon'>
                  <img src={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites.front_default} alt={pokemon.name} />
                </figure>
                <header>
                  <h2 className='title_pokemon-name'>{pokemon.name}</h2>
                  <div className="type_container">
                    <h3 className='type_title'>Type:</h3>
                    <div className='types_badges-container'>
                      {pokemon.types.map((type) => (
                          <Badge key={type.type.name} type={type.type.name}>{type.type.name}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className={'sizes-container'}>
                    <h2><span>{pokemon.weight / 10} Kg</span> <br /> <GiWeight size="2em"/> Weight </h2>
                    <h2><span>{pokemon.height / 10} M</span> <br /> <CiRuler size="2em"/> Height </h2>
                  </div>
                </header>
              </div>
            </label>
          );
        })}
      </div>

      {isOpen && selectedPokemon && (
        <div
          className={`modal-overlay ${closing ? 'closing' : 'open'}`} 
          onClick={() => toggleModal(null)}
        >
          <div className={`modal-content container ${selectedPokemon.types[0].type.name.toLowerCase()}`} onClick={(e) => e.stopPropagation()}>
            <span onClick={() => toggleModal(null)} className={"close"}></span>
            <header>
              <h2>{selectedPokemon.name}</h2>
            </header>
            <figure>
              <img src={selectedPokemon.sprites?.other?.['official-artwork']?.front_default || selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            </figure>
            <div className="pokemon-details">
              <div className='modal-container_types'>
                <h3>Type:</h3>
                <div className='types'>
                  {selectedPokemon.types.map((type, index) => (
                    <Badge key={index} type={type.type.name}>
                      {type.type.name }
                    </Badge>
                  ))}
                </div>
              </div>
              <h3>Abilities:</h3>
              <ul>
                {selectedPokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
              <h3>Stats:</h3>
              <ul>
                {selectedPokemon.stats.map((stat, index) => (
                  <li key={index}>
                    <strong>{stat.stat.name}:</strong> {stat.base_stat}
                    <Slider
                      value={stat.base_stat}
                      min={0}
                      max={150}
                      disabled
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
