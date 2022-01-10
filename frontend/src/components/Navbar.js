import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
        <a href="#"><img src={imgUrl} alt="pokeapi-logo" className="navbar-image" /></a>
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
