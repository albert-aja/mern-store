import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import {
  BanksTypes,
  NominalsTypes,
  PaymentsTypes,
} from "../../../services/datatypes";
import TopUpCard from "../../molecules/topup-card";

interface TopUpFormProps {
  nominals: NominalsTypes[];
  payments: PaymentsTypes[];
}

export default function topUpForm(props: TopUpFormProps) {
  const [verifyId, setVerifyId] = useState("");
  const [bankAccName, setBankAccName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const { nominals, payments } = props;
  const router = useRouter();

  const onNominalItemChanged = (data: NominalsTypes) => {
    setNominalItem(data);
  };

  const onPaymentItemChanged = (payment: PaymentsTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyId === "" ||
      bankAccName === "" ||
      Object.keys(nominalItem).length === 0 ||
      Object.keys(paymentItem).length === 0
    ) {
      toast.error("Mohon isi semua data!", {
        theme: "colored",
      });
    } else {
      const data = {
        verifyId,
        bankAccName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
  };

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            placeholder="Enter your ID"
            value={verifyId}
            onChange={(event) => setVerifyId(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <TopUpCard
              key={nominal._id}
              value={nominal._id}
              mainText={nominal.coinQuantity}
              addText={nominal.coinName}
              desc={`Rp. ${nominal.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}
              radioName="nominal"
              onChange={() => onNominalItemChanged(nominal)}
            />
          ))}
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) =>
              payment.banks.map((bank) => (
                <TopUpCard
                  value={bank._id}
                  mainText={payment.type}
                  desc={bank.bankName}
                  radioName="paymentMethod"
                  onChange={() => onPaymentItemChanged(payment, bank)}
                />
              ))
            )}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your Bank Account Name"
          value={bankAccName}
          onChange={(event) => setBankAccName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
