import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";
import rootReducer from "./reducers/";

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  sagaMiddleware.run(saga);

  return store;
}