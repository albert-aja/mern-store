import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import Category from "./category";
import TableContent from "./table-content";
import { getMemberOverview } from "../../../services/member";
import { TopUpCategory } from "../../../services/datatypes";

export default function overviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewApi = useCallback(async () => {
    const response = await getMemberOverview();

    if (response.error) {
      toast.error(response.message, {
        theme: "colored",
      });
    } else {
      setCount(response.data.count);
      setData(response.data.history);
    }
  }, []);

  useEffect(() => {
    getMemberOverviewApi();
  }, []);

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
              {count.map((item: TopUpCategory) => (
                <Category key={item._id} icon={item.name} nominal={item.value}>
                  Game
                  <br />
                  {item.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <TableContent data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
