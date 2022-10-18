import { END_LOADING, START_LOADING } from "../actions/actionTypes";

export interface ILoader {
  loader:boolean
}

const initialStateLoader:ILoader = {
  loader:false
};


export const loader = (state = initialStateLoader, action: { type: string; payload: boolean; }) => {
  switch (action.type) {
      case START_LOADING:
          return {
              ...state,
              loader:true

          };
          case END_LOADING:
          return {
              ...state,
              loader:false
          };

      default:
          return state 

  }
}
