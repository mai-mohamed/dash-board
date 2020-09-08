import { combineReducers } from "redux";
import {companyReducer} from "./Company/Reducer"
import {agentReducer} from "./Agent/Reducer"
export default combineReducers({
  companyReducer: companyReducer,
  agentReducer:agentReducer
});
