import NumberFormat from "react-number-format";
import cx from "classnames";
import Link from "next/link";

interface transactionProps {
  image: string;
  gameName: string;
  category: string;
  gameItem: string;
  price: number;
  status: string;
  id: string;
}

export default function transactionRow(props: transactionProps) {
  const {
    image, gameName, category, gameItem, price, status, id,
  } = props;

  const statusClass = cx({
    "float-start icon-status": true,
    pending: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });

  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width={80}
          height={60}
          alt={gameName}
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
        <p className="fw-medium color-palette-1 m-0">{gameItem}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative text-capitalize">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href={`/member/transactions/${id}`}>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
