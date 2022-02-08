import cx from "classnames";

interface ButtonProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

export default function buttonTab(props: Partial<ButtonProps>) {
  const { title, active, onClick } = props;

  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {title}
    </button>
  );
}
