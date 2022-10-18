import { ERROR } from "../actions/actionTypes";

export interface IError{
  firstName: string,
  email: string,
  phone: string,
  urlSocial: string,
}

const initialStateError:IError = {
      firstName: '',
      email: '',
      phone: '',
      urlSocial: '',
};


export const error = (state = initialStateError, action: { type: string; payload: IError; }) => {
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