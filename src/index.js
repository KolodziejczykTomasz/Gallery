import React from "react";
import ReactDOM from "react-dom";
import App from "./assets/app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from './assets/app/store/configureStore';
import { Provider } from "react-redux";

const store = configureStore();

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
     
          <App />
     
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};


store.firebaseAuthIsReady.then(() => {
  render();
})

serviceWorker.unregister();

