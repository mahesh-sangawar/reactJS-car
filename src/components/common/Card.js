import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="thumbnail">
          <img src={this.props.data.imageUrl}></img>
          <div className="caption text-center">
            <h3>Car of the Week</h3>
            <h2>{this.props.data.make} - {this.props.data.name}</h2>
            <p>{this.props.data.review}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
