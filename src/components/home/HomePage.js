'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Table from '../common/Table';
import Card from '../common/Card';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      return(
        <div>
          <Card data={this.props.carofweek}/>
          <Table data={this.props.models} make={this.props.make}/>
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    models: state.models,
    carofweek: state.carofweek,
    make: state.make
  };
};

export default connect(mapStateToProps)(HomePage);
