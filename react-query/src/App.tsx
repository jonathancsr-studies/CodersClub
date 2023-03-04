import { useCallback, useState } from "react";
import "./App.css";
import useFetchTopMangas from "./requests/useFetchTopMangas";
import { useFavoriteMangas } from "./store/useFavoriteMangas";

function App() {
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const { data } = useFetchTopMangas();
  const { favorites, favoritateManga } = useFavoriteMangas();

  const toggleShowOnlyFavorites = useCallback(() => {
    setShowOnlyFavorites((prevShowOnlyFavorites) => !prevShowOnlyFavorites);
  }, [favorites]);
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      <button onClick={toggleShowOnlyFavorites}>Show Favorites</button>
      {data?.data
        .filter(
          (manga) => !showOnlyFavorites || favorites.includes(manga.mal_id)
        )
        .map((manga) => (
          <div
            key={manga.mal_id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {manga.title}
            <img src={manga.images.jpg.image_url} alt="" />
            <button
              onClick={() => favoritateManga(manga.mal_id)}
              data-testid={`Favorite-Button-${manga.mal_id}`}
            >
              {favorites.includes(manga.mal_id) ? "*" : ""} Favoritar
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
