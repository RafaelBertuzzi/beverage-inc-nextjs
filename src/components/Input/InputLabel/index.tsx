interface IProps {
  title: string;
}

export function InputLabel({ title }: IProps): JSX.Element {
  return <div className={"text-lg mb-2"}>{title}</div>;
}
