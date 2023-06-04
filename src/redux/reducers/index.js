import { combineReducers } from "redux";
import table from "./table";
import authreducer from "./authReducers";
import itemReducer from "./ItemsReducers";
import collectorReducer from "./CollectorReducer";
// import cart from "./cart";

export default combineReducers({
    authreducer,
    itemReducer,
    collectorReducer
})