import configureStore from './frontend/store/store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodo, receiveTodos} from './frontend/actions/todo_actions';
import App from './frontend/components/app.jsx';
import Root from './frontend/components/root.jsx';
import {allTodos} from './frontend/reducers/selectors.js';

document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.store = store;
  window.allTodos = allTodos;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store = {store}/>, rootEl);
});
