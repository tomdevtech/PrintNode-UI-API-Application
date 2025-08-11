interface Props {
  title: string;
  Request: string;
}

export default function Button({ title, Request }: Props) {
  return (
    <button onClick={() => console.log(Request)}>{title}</button>
  );
}