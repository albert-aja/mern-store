import TableRow from './transaction-row';

export default function transactionTable() {
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
        <TableRow
          image="/img/overview-1.png"
          gameName="Mobile Legends"
          category="Mobile"
          gameItem={200}
          price={2000000}
          status="Pending"
        />
        <TableRow
          image="/img/overview-2.png"
          gameName="Call of Duty:Modern"
          category="Desktop"
          gameItem={140}
          price={740000}
          status="Success"
        />
        <TableRow
          image="/img/overview-3.png"
          gameName="Clash of Clans"
          category="Desktop"
          gameItem={200}
          price={1000000}
          status="Failed"
        />
        <TableRow
          image="/img/overview-4.png"
          gameName="The Royal Game"
          category="Mobile"
          gameItem={400}
          price={2200000}
          status="Pending"
        />
      </tbody>
    </table>
  );
}
