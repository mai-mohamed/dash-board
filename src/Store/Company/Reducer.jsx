import {ADD_COMPANY} from "./ActionTypes"
export const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPANY:
    //   return { ...state, books: action.payload };
    return console.log("plaaa")
    default:
      return state;
  }
};
