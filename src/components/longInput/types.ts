import { IForm } from "../../store/reducers/form";

export interface ILongInput {
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  fields: IForm;
  longInputMock:ILongInputMock[]
}
export type ILongInputMock = {
  title: string,
  name: string,
  placeholder: string,
}