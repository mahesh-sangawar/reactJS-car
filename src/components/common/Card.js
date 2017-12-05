'use strict';

import React from 'react';

class Card extends React.Component {
  render() {
    console.log(this.props);
    const self = this.props.data[0];
    return (
      <div className="container-fluid">
        <div className="thumbnail">
          <img src={self.imageUrl} />
          <div className="caption text-center">
            <h3>Car of the Week</h3>
            <h2>{self.make} - {self.name}</h2>
            <p>{self.review}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
