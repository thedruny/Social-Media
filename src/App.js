import React, { Component, Suspense } from 'react';
import './App.css'
import { Route, withRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import 'semantic-ui-css/semantic.min.css'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } return (
      <div className='container'>
        <HeaderContainer />
        <div className='mt-5'>
          <Suspense fallback={<Preloader />}>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
          </Suspense>
          <Route path={['/profile/:userId?', '/max']} render={() => <ProfileContainer />} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);