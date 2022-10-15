import { FORM_SUBMIT } from "../action";

const initialState = {
  form: {
    firstName:'',
    phone:'',
    email:'',
    urlSocial:'',
    companyName:'',
    fullName:'',
    city:'',
    sources:'',
  },
};


export const form = (state = initialState, action) => {
  switch (action.type) {
      case FORM_SUBMIT:
          return {
              ...state.form,
              ...action.payload
          };

      default:
          return state
  }

}