import Image from 'next/image';
import cx from 'classnames';

interface MenuItemProps {
  icon: string;
  text: string;
  active?: boolean;
}

export default function menuItem(props: Partial<MenuItemProps>) {
  const { icon, text, active } = props;
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
        <a href="/#" className="text-lg text-decoration-none">
          {text}
        </a>
      </p>
    </div>
  );
}
