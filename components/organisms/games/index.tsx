import { useCallback, useEffect, useState } from "react";
import GameCard from "../../molecules/game-card";
import { getFeaturedGame } from "../../../services/player";
import { GameItemTypes } from "../../../services/datatypes";

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  const IMG_PATH = process.env.NEXT_PUBLIC_IMG;

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
          {gameList.map((item: GameItemTypes) => (
            <GameCard
              key={item._id}
              id={item._id}
              image={`${IMG_PATH}/${item.thumbnail}`}
              game={item.name}
              category={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
