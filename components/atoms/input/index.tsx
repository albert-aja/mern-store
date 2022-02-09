import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  label: string;
  type: "text" | "hidden" | "email" | "password" | "tel";
  value: string;
  placeholder: string;
}

export default function input(props: InputProps) {
  const {
    title, label, type, value, placeholder, ...nativeProps
  } = props;
  return (
    <>
      <label
        htmlFor={value}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {title}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={label}
        name={label}
        value={value}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
