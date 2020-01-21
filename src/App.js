import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/audios' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;