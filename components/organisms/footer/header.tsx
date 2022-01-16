interface headerProps {
  text: string;
}
export default function footerHeader(props: headerProps) {
  const { text } = props;
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{text}</p>;
}
