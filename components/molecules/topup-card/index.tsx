import Image from "next/image";

interface topUpCardProps {
  value: string;
  mainText: string | number;
  addText?: string;
  desc: string | number;
  radioName: string;
}

export default function topUpCard(props: Partial<topUpCardProps>) {
  const { value, mainText, addText, desc, radioName } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={value}
    >
      <input
        className="d-none"
        type="radio"
        id={value}
        name={radioName}
        value={value}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">{mainText} </span>
            {addText}
          </p>
          <Image
            id="icon-check"
            src="/icon/blue-tick.svg"
            width={20}
            height={20}
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{desc}</p>
      </div>
    </label>
  );
}
