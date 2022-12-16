import Categori from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
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
              <Categori icon="ic-mobile" price={18000500}>
                Game <br /> Categories
              </Categori>
              <Categori icon="ic-desktop" price={8455000}>
                Game <br /> Categories
              </Categori>
              <Categori icon="ic-categories" price={5000000}>
                Other <br /> Categories
              </Categori>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
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
                  title="Mobile Legends: The New Battle 2021"
                  category="Desktop"
                  thumbnail="overview-1"
                  item={200}
                  price={290000}
                  status="Pending"
                />
                <TableRow
                  title="Call of Duty:Modern"
                  category="Desktop"
                  thumbnail="overview-2"
                  item={550}
                  price={740000}
                  status="Success"
                />
                <TableRow
                  title="Clash of Clans"
                  category="Mobile"
                  thumbnail="overview-3"
                  item={100}
                  price={120000}
                  status="Failed"
                />
                <TableRow
                  title="The Royal Game"
                  category="Mobile"
                  thumbnail="overview-4"
                  item={225}
                  price={200000}
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
