import React, { Component } from 'react';
import axios from 'axios';

import UserCard from './Components/UserCard';
import FollowersInfo from './Components/FollowersInfo';

import './App.css';
import styled from 'styled-components'

const AppContainer = styled.div`
  font-size: 1rem;
  max-width: 80%;
  max-width: 450px;
  min-width: 450px;
  padding: 5% 15%;
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
  background-color: white;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  white-space: nowrap;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;
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

  componentDidUpdate(prevProps, prevState) {
    if(prevState.username !== this.state.username) {
      this.getUser();
    } else {
      return
    }
  }

  loginChange = username => {
    this.setState({ username });
  };
  

  render() {
    return (
      <AppContainer>
        <Title>
          <h1>REACT GITHUB USER CARD </h1>
        </Title>
        <UserCard {...this.state.githubUser} />
        <FollowersInfo
          followers={this.state.followers}
          loginChange={this.loginChange}
        />
      </AppContainer>
    );
  }
}

export default App;
