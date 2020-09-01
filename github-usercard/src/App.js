import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import UserCard from './Components/UserCard';
import FollowersInfo from './Components/FollowersInfo';
class App extends Component {
  constructor() {
    super()
    this.state = {
      username: 'andremichalowski',
      githubUser: {},
      followers: [],
      inputValue: ''
    }
  }

  getUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        console.log(res)
        console.log('Axios get for githubUser', res);
        this.setState({
          githubUser: res.data
        })
      })
      .catch((err) => {
        console.log(`Error with Axios data for ${this.state.username}`, err)
      })

    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => {
        console.log('Axios get for githubUser followers', res);
        this.setState({
          followers: res.data
        })
      })
      .catch((err) => {
        console.log(`Error with Axios data for ${this.state.username} followers`, err)
      })
  }

  componentDidMount() {
    this.getUser();
  }
  

  render() {
    return (
      <div className="App">
        <h1>React Github User Card</h1>
        <div>Test {this.props.name}</div>
          <UserCard />
          <FollowersInfo />
      </div>
    );
  }
}

export default App;
