import { FORM_SUBMIT } from "../actions/actionTypes";

export interface IForm {
  firstName: string;
  phone: string;
  email: string;
  urlSocial: string;
  companyName: string;
  fullName: string;
  city: string;
  sources: string;
}

const initialStateForm: IForm = {
  firstName: "",
  phone: "",
  email: "",
  urlSocial: "",
  companyName: "",
  fullName: "",
  city: "",
  sources: "",
};

export const form = (
  state = initialStateForm,
  action: { type: string; payload: IForm }
) => {
  switch (action.type) {
    case FORM_SUBMIT:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
