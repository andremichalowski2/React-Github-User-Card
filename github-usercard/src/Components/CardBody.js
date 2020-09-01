import React, { Component } from 'react';

import styled from 'styled-components';

const Card = styled.div `
    padding: 5%;
    margin: 5%;
    max-width: 400px;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    border: 1px solid #d1d5da;
    border-radius: 3px;
`
const NoDecoration = styled.a `
    text-decoration: none;
`
class CardBody extends Component {
    render () {
        return (
          <Card>
          <div>Github: 
            <NoDecoration
                href={`${this.props.html_url}`}> (Link)
            </NoDecoration>
          </div>
          {this.props.email !== null && (
          <div>Email: {this.props.email}</div>
          )}
          <div>Followers: {this.props.followers}</div>
          <div>Following: {this.props.following}</div>
          <div>Repos: {this.props.public_repos}</div>
        </Card>
        )
    }
}

export default CardBody;