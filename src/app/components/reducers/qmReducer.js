import { NEW } from "../actions/qmActions";
import { QUOTES } from "../statesData/quotes";
const qmState = {
  quoteList: QUOTES,
  counter: 0
}



export const quoteReducer = (state = qmState, action) => {
  switch (action.type) {
    case NEW:
      return (state.counter === state.quoteList.length - 1
        ? {
          ...state,
          counter: 0
        }
        : {
          ...state,
          counter: state.counter + 1
        });
    default:
      return state;
  }
}