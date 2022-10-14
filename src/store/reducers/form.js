import { FORM_DONE } from "../action";

const initialState = {
  form: {
    firstName:'',
    phone:'',
    email:'',
    url:'',
    companyName:'',
    fullName:'',
    city:'',
    sources:'',
  },
};


export const form = (state = initialState, action) => {
  switch (action.type) {
      case FORM_DONE:
          return {
              ...state.form,
              ...action.payload
          };

      default:
          return state
  }

}