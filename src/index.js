  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { TodoLayer } from './context/todoContext';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
      <App />
    </TodoLayer>
  </React.StrictMode>,
  document.getElementById('root')
);