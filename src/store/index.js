import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import rootSaga from "./sagas";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, createLogger({ collapsed: true }))
);
sagaMiddleware.run(rootSaga);

export default store;
