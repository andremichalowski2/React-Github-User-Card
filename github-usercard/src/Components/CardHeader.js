
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
`
const TextTop = styled.div `
padding: 3% 0%;
margin-top: 5%;
`
const Text = styled.div `
padding: 3% 0%;
`
const UserImg = styled.img `
    max-width: 270px;
`
class CardHeader extends Component {
    render () {
        return (
          <Card>
            <UserImg src={this.props.image} alt='User Card' />
            <TextTop>
                <div>Name: {this.props.name}</div>
            </TextTop>
            <Text>
                <div>User-Name: {this.props.login}</div>
            </Text>
          </Card>
        )
    }
}

export default CardHeader;