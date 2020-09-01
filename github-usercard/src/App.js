import React, { Component } from 'react';

import './App.css';

import UserCard from './Components/UserCard';
import FollowersInfo from './Components/FollowersInfo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserCard />
        <FollowersInfo />
      </div>
    );
  }
}

export default App;
