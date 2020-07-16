import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

// Redux integration
import { Provider } from "react-redux";
import { configureStore } from './redux/store/create-redux-store';

// React router 
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
   <BrowserRouter>
      <Provider store={configureStore()}>
         <App />
      </Provider>
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
