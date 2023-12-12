import { createStore, applyMiddleware, combineReducers } from "redux";
import Apartementreducer from "./Reducers/ApartementReducer";

import authreducer from "./Reducers/auth";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  apartements: Apartementreducer,
  auth: authreducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
