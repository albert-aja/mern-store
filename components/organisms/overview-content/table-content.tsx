import TableRow from './table-row';

export default function tableContent() {
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
        <TableRow
          gameThumb="/img/overview-1.png"
          gameName="Mobile Legend"
          category="Desktop"
          gameItem={150}
          price={1200000}
          status="Success"
        />
        <TableRow
          gameThumb="/img/overview-2.png"
          gameName="Call of Duty:Modern"
          category="Desktop"
          gameItem={250}
          price={2200000}
          status="Pending"
        />
        <TableRow
          gameThumb="/img/overview-3.png"
          gameName="Clash of Clans"
          category="Desktop"
          gameItem={180}
          price={1250000}
          status="Failed"
        />
        <TableRow
          gameThumb="/img/overview-4.png"
          gameName="The Royal Game"
          category="Desktop"
          gameItem={50}
          price={200000}
          status="Success"
        />
      </tbody>
    </table>
  );
}
