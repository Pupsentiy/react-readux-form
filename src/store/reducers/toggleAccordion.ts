import { TOGGLE_ACC } from "../actions/actionTypes";

export interface ITAcc {
  toggleAcc:boolean
}

const initialStateToggleAcc:ITAcc = {
  toggleAcc:false
};


export const toggleAccordion = (state = initialStateToggleAcc, action: { type: string; payload: boolean; }) => {
  switch (action.type) {
          case TOGGLE_ACC:
          return {
              ...state,
              toggleAcc: !state.toggleAcc
          };

      default:
          return state 

  }
}
