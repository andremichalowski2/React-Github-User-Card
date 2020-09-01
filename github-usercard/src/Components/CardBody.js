import React, { Component } from 'react';
class CardBody extends Component {
    render () {
        return (
            <div>
              <p>Card Body: Placeholder for props information from user and followers array </p>
              <a href={`https://github.com/${this.props.github}`}>Github</a>
                <div>Email: {this.props.email}</div>
                {/* //statement for empty */}
                <div>Followers: {this.props.followers}</div>
                <div>Following: {this.props.following}</div>
                <div>Other: {this.props.other}</div>
              {/* //statement for empty? */}
            </div>
        )
    }
}

export default CardBody;