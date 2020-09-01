
import React, { Component } from 'react';
class CardHeader extends Component {
    render () {
        return (
            <div>
                <p>CardHeader: Placeholder for props information from user and followers array </p>
                  <div>Name: {this.props.name}</div>
                  <div>User-Name: {this.props.login}</div>
                  <div>Image: {this.props.image}</div>
            </div>
        )
    }
}

export default CardHeader;