import { IForm } from "../../store/reducers/form";

export type TPlaceholder = {
  name: string;
  placeholder: string;
};

export interface ISelect {
  props: { name: string }[];
  placeholder: TPlaceholder;
  fields: IForm;
  setFields: React.Dispatch<React.SetStateAction<IForm>>;
}

export type PopupClick = MouseEvent & {
  path: Node[];
};