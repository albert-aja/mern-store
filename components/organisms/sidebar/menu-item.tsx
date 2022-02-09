import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MenuItemProps {
  icon: string;
  text: string;
  active?: boolean;
  link?: string;
  onClick?: () => void;
}

export default function menuItem(props: Partial<MenuItemProps>) {
  const {
    icon, text, active, link = "/", onClick,
  } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt="overview"
        />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{text}</a>
        ) : (
          <Link href={link}>
            <a className="text-lg text-decoration-none">{text}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
