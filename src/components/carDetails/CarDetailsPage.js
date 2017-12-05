'use strict';

import React, { PropTypes } from 'react';
import Card from '../common/Card';

class CarDetailsPage extends React.Component {
  render() {
    console.log(this.props);
    const self = this.props.location.state;
    return ( 
      <div className="container-fluid">
        <div className="thumbnail">
          <img src={self.imageUrl} />
          <div className="caption text-center">
            <h3>Car Details</h3>
            <h2>{self.make.name} - {self.name}</h2>
            <h3>Price - {self.price}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetailsPage;
