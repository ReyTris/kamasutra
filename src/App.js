import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';

const App = ({state, addPost, updateNewText}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
          <Route path='/profile' render={() => <Profile posts={state.profilePage.posts} newPost={state.profilePage.newPostText} addPost={addPost} updateNewText={updateNewText}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
