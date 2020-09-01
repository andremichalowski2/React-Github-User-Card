import React, { Component } from 'react';

import styled from "styled-components";

const Card = styled.div`
  padding: 5%;
  margin: 5%;
  max-width: 400px;
  max-height: 800px;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border: 1px solid #d1d5da;
  border-radius: 3px;
`;

const Square = styled.div`
  padding: 5%;
  margin: 5%;
`;

const Image = styled.img`
  max-width: 40px;
  max-height: 40px;
`;
class FollowersInfo extends Component {
    render () {
      const { followers, loginChange } = this.props;
      return (
        <Card>
          {followers.map((follower, index) => {
            const handleMouseOver = () => {
              loginChange(follower.login);
            };
            return (
              <div key={index}>
                <Square>
                  <a onMouseOver={handleMouseOver} href={follower.html_url}>
                    <Image src={follower.avatar_url} />
                  </a>
                </Square>
              </div>
            );
          })}
        </Card>
      )
    }
}

export default FollowersInfo;