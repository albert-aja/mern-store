import cx from 'classnames';

interface tableRowProps {
  gameThumb: string;
  gameName: string;
  category: string;
  gameItem: number;
  price: number;
  status: 'Pending' | 'Success' | 'Failed';
}

export default function tableRow(props: tableRowProps) {
  const {
    gameThumb, gameName, category, gameItem, price, status,
  } = props;

  const statusClass = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={gameThumb}
          width={80}
          height={60}
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {gameName}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {gameItem}
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
