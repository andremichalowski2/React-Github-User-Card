
import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

import styled from 'styled-components';

const Card = styled.div `
    padding: 5%;
    margin: 5%;
    max-width: 400px;
    max-height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border: 1px solid #d1d5da;
    border-radius: 3px;
`
class UserCard extends Component {
    render () {
        return (
            <>
                <CardHeader name={this.props.name} image={this.props.avatar_url} login={this.props.login} />
                <CardBody 
                  html_url={this.props.html_url} 
                  email={this.props.email} 
                  followers={this.props.followers}
                  following={this.props.following}
                  public_repos={this.props.public_repos} 
                />
            </>
        )
    }
}

export default UserCard;