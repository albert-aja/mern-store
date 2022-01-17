import cx from 'classnames';

interface ButtonProps {
  title: string;
  active?: boolean;
}

export default function buttonTab(props: Partial<ButtonProps>) {
  const { title, active } = props;

  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <a data-filter="*" href="/#" className={btnClass}>
      {title}
    </a>
  );
}
