import { VALID_FALSE, VALID_TRUE } from "../actions/actionTypes";

export interface IValid {
  valid: boolean;
}

const initialStateValid: IValid = {
  valid: false,
};

export const valid = (
  state = initialStateValid,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case VALID_TRUE:
      return {
        ...state,
        valid: true,
      };
    case VALID_FALSE:
      return {
        ...state,
        valid: false,
      };

    default:
      return state;
  }
};
