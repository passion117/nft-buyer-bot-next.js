import { combineReducers } from "redux";
import mintBot from "./mintBot/reducer";
import bidBot from "./bidBot/reducer";

const reducer = combineReducers({
  mintBot,
  bidBot,
});

export default reducer;
