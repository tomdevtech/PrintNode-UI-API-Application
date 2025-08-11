
interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function InputField({ value, onChange }: Props) {
  return (
    <div>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
