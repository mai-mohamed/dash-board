import {ADD_COMPANY_SAGA,ADD_COMPANY} from "./ActionTypes";

export const addCompanyAction = (data) => {
  
    return {
      type: ADD_COMPANY_SAGA,
      payload: data,
    };
  };
  

  export const getData = (data) => {
  console.log(data)
    return {
      type: ADD_COMPANY,
      payload: data,
    };
  };