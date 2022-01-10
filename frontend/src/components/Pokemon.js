import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import { ProgressBar } from 'react-bootstrap';

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  const height = Math.round(((pokemon.height * 0.1) + Number.EPSILON) * 100) / 100;
  const mass = Math.round(((pokemon.weight * 0.1) + Number.EPSILON) * 100) / 100;

  return (
    <div className="pokemon-card">
        <button onClick={clickHeart} className="pokemon-heart-btn">
          <div className="pokemon-favorite">{heart}</div>
        </button>
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="pokemon-idname"><h2>{pokemon.id}. {pokemon.name}</h2></div>
      <div className="pokemon-type">
        Type(s):
        {pokemon.types.map((type, idx) => {
          return (
            <div key={idx} className="pokemon-type-text">
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="pokemon-type">
        Abilities:
        {pokemon.abilities.map((ability, idx) => {
          return (
            <div key={idx} className="pokemon-type-text">
              {ability.ability.name}
            </div>
          );
        })}
      </div>
      <div className="pokemon-profile">
        <p>Height: {height} m</p>
        <p>Mass: {mass} kg</p>
      </div>
      <h4 className="big-desc">Base Stats</h4>
      <div className="pokemon-type">
      {pokemon.stats.map((stat, key) => (
        <div key={key} className="pokemon-type-text">
          <p>{stat.stat.name}</p>
          <ProgressBar label={stat.base_stat}/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Pokemon;
