
import state, {subscribe} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewText} from './redux/state'

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewText={updateNewText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)