import { all, fork } from "redux-saga/effects";
import mintBotSaga from "./mintBot/saga";
import bidBotSaga from "./bidBot/saga";

export default function* rootSaga() {
  yield all([fork(mintBotSaga), fork(bidBotSaga)]);
}
