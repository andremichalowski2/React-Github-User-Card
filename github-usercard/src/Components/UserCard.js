
import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
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