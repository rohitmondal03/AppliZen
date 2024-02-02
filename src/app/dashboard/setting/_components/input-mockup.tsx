import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"


type TInputMockupParams = {
  id: string;
  label: string;
  value: string;
  setDetail: (val: string) => void;
}


export default function InputMockup(
  { id, label, value, setDetail }: TInputMockupParams
) {
  return (
    <div className="">
      <Label
        htmlFor={id}
        className="font-bold text-lg text-muted-foreground"
      >
        {label}
      </Label>
      <Input
        id={id}
        autoComplete="off"
        value={value}
        onChange={(e) => setDetail(e.target.value)}
        className="border-gray-500"
      />
    </div>
  )
}