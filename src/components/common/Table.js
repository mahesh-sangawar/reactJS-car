'use strict';

import React from 'react';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';

class Table extends React.Component {
  handleClick(name, makeId, id, price, imageUrl) {
    let make = _.find(this.props.make[0], (item) => { 
      return item.id === makeId; 
    });
    const carDetails = { name, makeId, id, price, imageUrl, make};
    browserHistory.push({
      pathname:`/${make.name}/${name}/${id}`,
      state: carDetails
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Price</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
      <tbody>
        {this.props.data[0].map(({ id, makeId, name, price, imageUrl}) =>
        <tr key={id}>
          <td>{makeId}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td><button className="btn btn-default" onClick={this.handleClick.bind(this, name, makeId, id, price, imageUrl)}>View Details</button></td>
        </tr>
      )}
      </tbody>
      </table>
    );
  }
}

export default Table;
