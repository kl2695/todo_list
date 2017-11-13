import store from './frontend/store/store.js';
import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener("DOMContentLoaded", function(){
  window.store = store;
});
