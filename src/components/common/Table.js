import React from 'react';


class Table extends React.Component {
  render() {
    console.log(this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>makeId</th>
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
      <tbody>
        {this.props.data.map(({ id, makeId, name, price, imageUrl}) =>
        <tr key={id}>
          <td>{makeId}</td>
          <td>{name}</td>
          <td>{price}</td>
        </tr>
      )}
      </tbody>
      </table>
    );
  }
}

export default Table;
