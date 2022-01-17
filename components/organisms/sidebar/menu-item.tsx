import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface MenuItemProps {
  icon: string;
  text: string;
  active?: boolean;
  link: string;
}

export default function menuItem(props: Partial<MenuItemProps>) {
  const {
    icon, text, active, link,
  } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt="overview"
        />
      </div>
      <p className="item-title m-0">
        <Link href={link}>
          <a className="text-lg text-decoration-none">{text}</a>
        </Link>
      </p>
    </div>
  );
}
