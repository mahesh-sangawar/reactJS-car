'use strict';

import React from 'react';
import {Link} from 'react-router';

class NotFoundPage extends React.Component {
  render() {
    return(
        <div className="text-center">
            <h1>Page not found</h1>
            <p>Sorry, we could find the page you are looking for, please go back to home.</p>
            <Link to="/"><button className="btn btn-default btn-lg">Home</button></Link>
        </div>
    );
  }
}

export default NotFoundPage;