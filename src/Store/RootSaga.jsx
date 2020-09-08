
  
 import {ADD_COMPANY_SAGA} from "./Company/ActionTypes"
  import { getData } from "./Company/ActionCreator";
  import { takeEvery,  put } from "redux-saga/effects";

  
 
  export function* addCompany(action) {
    try {
      //post request
      yield put(getData("company added"));
    } catch {
      console.log("error");
    }
  }
  
  export default function* rootSaga() {
    yield takeEvery(ADD_COMPANY_SAGA, addCompany);
  }
  