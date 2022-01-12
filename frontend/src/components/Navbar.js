import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const [token, setToken] = useContext(UserContext);

  const handleLogout = () => {
    setToken(null);
  };

  let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <a href="#"><img src={imgUrl} alt="pokeapi-logo" className="navbar-image" /></a>
      </div>
      {token ? (
      <>
        <div>&#10084;&#65039; {favoritePokemons.length}</div>
        <div>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
        </div>
      </>
      ) : (
        <></>
      )
    } 
    </nav>
  );
};

export default Navbar;
