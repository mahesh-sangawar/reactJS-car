import React from 'react';
import TableRow from './TableRow';

const Table = (data) => (
  <table>
    {data.map(row => {
      <TableRow row={row} />;
    })}
  </table>
);

export default Table;