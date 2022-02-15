import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export function InputContainer({ children }: IProps): JSX.Element {
  return <div>{children}</div>;
}
