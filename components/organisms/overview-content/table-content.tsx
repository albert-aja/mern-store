import { HistoryTransactionTypes } from "../../../services/datatypes";
import TableRow from "./table-row";

interface tableContentProps {
  data: Array<any>;
}

export default function tableContent(props: tableContentProps) {
  const { data } = props;
  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <table className="table table-borderless">
      <thead>
        <tr className="color-palette-1">
          <th className="text-start" scope="col">
            Game
          </th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: HistoryTransactionTypes) => (
          <TableRow
            key={item._id}
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
