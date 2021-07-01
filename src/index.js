import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import setReducer from './store/reducer.js';

const saveToLocalStorage = (state) =>{

  try{
  
  const serializedState = JSON.stringify(state);
  console.log("ss",serializedState)
  localStorage.setItem('state',serializedState);
  
  }catch(e){
  
  console.log(e)
  }
  
  };
  
  const loadFromLocalStorage=()=>{
  try{
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) {
  return undefined;
  }
  return JSON.parse(serializedState);
  }catch(e){
  return undefined;
  }
  };
  
  const peristedState=loadFromLocalStorage();
  
  const store = createStore(setReducer, peristedState);
  
  store.subscribe(()=>{
  
  saveToLocalStorage(store.getState());
  });


ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
       {console.log("sri",store.getState())}
    <App  songs={store.getState()}/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

