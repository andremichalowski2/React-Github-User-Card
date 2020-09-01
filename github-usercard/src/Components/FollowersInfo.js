import React, { Component } from 'react';
class FollowersInfo extends Component {
    render () {
      const { followers, loginChange } = this.props;
      return (
        <>
          {followers.map((follower, index) => {
            const handleMouseOver = () => {
              loginChange(follower.login);
            };
            return (
              <div key={index}>
                  <a onMouseOver={handleMouseOver} href={follower.html_url}>
                    <img src={follower.avatar_url} />
                  </a>
              </div>
            );
          })}
      </>
      )
    }
}

export default FollowersInfo;