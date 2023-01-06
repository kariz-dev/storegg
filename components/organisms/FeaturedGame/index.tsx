import { Fragment, useEffect, useState } from "react";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getGameList = async () => {
    setLoading(true);
    const response = await fetch(
      "http://localhost:4000/api/v1/players/landingpage"
    );
    const data = await response.json();
    setGameList(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getGameList();
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
          {loading ? (
            <Fragment>loading..</Fragment>
          ) : (
            gameList.map((item) => (
              <Fragment>
                <GameItem
                  key={item._id}
                  thumbnail={item.thumbnail}
                  title={item.name}
                  category={item.category.name}
                />
              </Fragment>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
