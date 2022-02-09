import ListContent from "../../molecules/footer-text";

interface contentData {
  link: string;
  text: string;
}

interface listProps {
  contents: contentData[];
}

export default function list(props: listProps) {
  const { contents } = props;
  return (
    <ul className="list-unstyled">
      {contents.map((e) => (
        <ListContent key={e.text} link={e.link} text={e.text} />
      ))}
    </ul>
  );
}
