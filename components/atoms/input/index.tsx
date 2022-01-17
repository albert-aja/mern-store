interface InputProps {
  label: string;
  type: 'text' | 'hidden' | 'email' | 'password' | 'tel';
  value: string;
  placeholder: string;
}

export default function input(props: InputProps) {
  const {
    label, type, value, placeholder, ...nativeProps
  } = props;
  return (
    <>
      <label
        htmlFor={value}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={value}
        name={value}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
