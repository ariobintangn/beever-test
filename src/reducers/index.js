import { combineReducers } from "redux";

const favouritesReducer = (state = [], action) => {
    if (action.type === "ADD_FAV_NAME") {
      return state.concat(action.payload);
    }
  
    return state;
  }

// const initState = {
//     favourites: ''
// }
export default combineReducers({
    favourites: favouritesReducer,
});
