import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools()); //modules의index.js에서 combineReducers()함수로 합친 rootReducer를 사용하여 store를 생성한다.

/*
리액트 컴포넌트에서 스토어를 사용할 수 있도록 App컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸 준다.
이 컴포넌트를 사용할 때는 sotre를 props로 전달해야 한다.
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
