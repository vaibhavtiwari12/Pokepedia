import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import pokemonReducer from "./pokemonReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    pokemonReducer,
  });

export default createRootReducer;
