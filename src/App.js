import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import Footer from './Components/Footer'

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import PasswordRecovery from './Components/PasswordRecovery'

import TimeLine from './Components/TimeLine'
import Post from './Components/Post'
import Profile from './Components/Profile'

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <SignIn />
        <SignUp />
        <PasswordRecovery />
        <TimeLine />
        <Post />
        <Profile />
        <Footer />
      </main>
    );
  }
}

export default App;
