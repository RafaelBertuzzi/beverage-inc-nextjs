interface IProps {
    type: "email" | "password" | "url"
    onChange: (value: string) => void;
}

export function InputControl({type, onChange}: IProps): JSX.Element {
  return <input
      type={type}
      onChange={e => onChange(e.target.value)}
      className={"" +
      "w-full h-10 pl-3 text-white " +
      " bg-blue-600 rounded-sm border border-yellow-500 outline-none " +
      " focus:border-2"
      }
  />;
}
