import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { getMemberTransaction } from "../../../services/member";
import ButtonTab from "./button-tab";
import TransactionTable from "./transaction-table";

export default function transactionContent() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("all");

  const getMemberTransactionApi = useCallback(async (value) => {
    const response = await getMemberTransaction(value);

    if (response.error) {
      toast.error(response.message, {
        theme: "colored",
      });
    } else {
      setTotal(response.data.total);
      setData(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionApi("all");
  }, []);

  const onTabClicked = (value: string) => {
    setTab(value);
    getMemberTransactionApi(value);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                onClick={() => onTabClicked("all")}
                title="All Trx"
                active={tab === "all"}
              />
              <ButtonTab
                onClick={() => onTabClicked("success")}
                title="Success"
                active={tab === "success"}
              />
              <ButtonTab
                onClick={() => onTabClicked("pending")}
                title="Pending"
                active={tab === "pending"}
              />
              <ButtonTab
                onClick={() => onTabClicked("failed")}
                title="Failed"
                active={tab === "failed"}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <TransactionTable data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
