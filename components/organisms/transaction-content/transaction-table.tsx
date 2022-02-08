import { HistoryTransactionTypes } from "../../../services/datatypes";
import TableRow from "./transaction-row";

interface transactionTableProps {
  data: Array<any>;
}

export default function transactionTable(props: transactionTableProps) {
  const { data } = props;
  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <table className="table table-borderless">
      <thead>
        <tr className="color-palette-1">
          <th className="" scope="col">
            Game
          </th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="list_status_item">
        {data.map((item: HistoryTransactionTypes) => (
          <TableRow
            key={item._id}
            id={item._id}
            image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
            gameName={item.historyVoucherTopup.gameName}
            category={item.historyVoucherTopup.category}
            gameItem={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
            price={item.value}
            status={item.status}
          />
        ))}
      </tbody>
    </table>
  );
}
