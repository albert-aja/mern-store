import { useEffect, useState } from "react";
import GameCard from "../../molecules/game-card";
import axios from "axios";

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([]);

  useEffect(async () => {
    const res_data = await axios.get(
      "https://mern-storegg.herokuapp.com/api/v1/players/landingpage"
    );
    setGameList(res_data.data.data);
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => (
            <GameCard
              key={item._id}
              image={`https://mern-storegg.herokuapp.com/uploads/${item.thumbnail}`}
              game={item.name}
              category={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
