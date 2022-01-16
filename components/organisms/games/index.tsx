import GameCard from '../../molecules/game-card';

export default function FeaturedGames() {
  const gameList = [
    {
      link: '/detail',
      image: '/img/Thumbnail-1.png',
      game: 'Super Mech',
      device: 'Mobile',
    },
    {
      link: '/detail',
      image: '/img/Thumbnail-2.png',
      game: 'Call of Duty: Modern',
      device: 'Mobile',
    },
    {
      link: '/detail',
      image: '/img/Thumbnail-3.png',
      game: 'Mobile Legends',
      device: 'Mobile',
    },
    {
      link: '/detail',
      image: '/img/Thumbnail-4.png',
      game: 'Clash of Clans',
      device: 'Mobile',
    },
    {
      link: '/detail',
      image: '/img/Thumbnail-5.png',
      game: 'Valorant',
      device: 'Desktop',
    },
  ];
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((e, i) => (
            <GameCard
              link={e.link}
              image={e.image}
              game={e.game}
              device={e.device}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
