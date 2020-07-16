import { createStore, applyMiddleware, Store } from 'redux';

import thunk from "redux-thunk";

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers, { ApplicationState } from '../reducers';
import { initialState } from '../reducers/initial-state';


export const configureStore = (
): Store<ApplicationState> => {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  // We'll create our store with the combined reducers and the initial Redux state that
  // we'll be passing from our entry point.
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(
      thunk,
    )),
  );
}