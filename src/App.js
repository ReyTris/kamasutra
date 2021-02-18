import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';

const App = ({state, dispatch, store}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <Dialogs store={store}/>}/>
          <Route path='/profile' render={() => <Profile posts={state.profilePage.posts} newPost={state.profilePage.newPostText} dispatch={dispatch}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
