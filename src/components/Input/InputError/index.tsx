interface IProps {
  title: string;
}

export function InputError({ title }: IProps): JSX.Element {
  return <div className={"text-sm text-danger mt-1"}>{title}</div>;
}
