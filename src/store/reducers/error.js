import { ERROR} from "../action";

const initialState = {
      firstName: '',
      email: '',
      phone: '',
      urlSocial: '',
};


export const error = (state = initialState, action) => {
  switch (action.type) {
      case ERROR:
          return {
              ...state,
              ...action.payload
          };

      default:
          return state
  }

}