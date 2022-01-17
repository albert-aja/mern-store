import Category from './category';
import TableContent from './table-content';

export default function overviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category icon="desktop" nominal={18000500}>
                Game
                <br />
                Desktop
              </Category>
              <Category icon="mobile" nominal={8455000}>
                Game
                <br />
                Mobile
              </Category>
              <Category icon="desktop" nominal={5000000}>
                Other
                <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <TableContent />
          </div>
        </div>
      </div>
    </main>
  );
}
