import { NEW, NEW_COLOR } from "../actions/qmActions";
import { QUOTES } from "../statesData/quotes";
const qmState = {
  quoteList: QUOTES,
  counter: 0,
  color: 'black'
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
    case NEW_COLOR:
      return ({
        ...state,
        color: action.newColor
      })
    default:
      return state;
  }
}