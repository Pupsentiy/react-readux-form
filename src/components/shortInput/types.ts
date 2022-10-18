import { IForm } from "../../store/reducers/form";

export interface IShortInput {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fields: IForm;
}

export interface IShortInputMock {
  title: string;
  name: string;
  placeholder: string;
  mask: string;
}