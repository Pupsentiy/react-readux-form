import { SET_LOAD } from "../action";

const initialState = {
  loader:false
};


export const loader = (state = initialState, action) => {
  switch (action.type) {
      case SET_LOAD:
          return {
              ...state.loader,
              loader:action.payload
          };

      default:
          return state 

  }
}
