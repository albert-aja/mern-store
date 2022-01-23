import Image from 'next/image';
import Link from 'next/link';

export interface GameCardProps {
  link: string;
  image: string;
  game: string;
  device: string;
}

export default function gameCard(props: GameCardProps) {
  const {
    link, image, game, device,
  } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href={link}>
        <a>
          <div className="blur-sharp">
            <Image
              src={image}
              width={205}
              height={270}
              alt="game-thumbnail"
              className="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/game-controller.svg"
                  width={54}
                  height={36}
                  alt="console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{game}</p>
                <p className="fw-light text-white m-0">{device}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
