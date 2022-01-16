import Link from 'next/link';

interface footerTextProps {
  link: string;
  text: string;
}

export default function footerText(props: footerTextProps) {
  const { link, text } = props;
  return (
    <li className="mb-6">
      <Link href={link}>
        <a className="text-lg color-palette-1 text-decoration-none">{text}</a>
      </Link>
    </li>
  );
}
