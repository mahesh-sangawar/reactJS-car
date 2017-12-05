'use strict';

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Dropdown from '../common/Dropdown';
import _ from 'lodash';

class SearchPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      models: [],
      selectedMake: '',
      selectModel: ''
    };
  }

  makeChanged(event) {
    let models = [];
    
    for (let index = 0; index < this.props.models[0].length; index++) {
      const element = this.props.models[0];
      if(element[index].makeId === parseInt(event.target.value)) 
      {
        models.push(element[index]);
      }
    }
    let selectedMake = event.target.value;
    if(selectedMake === 'Please select') {
      selectedMake = '';
    }
    this.setState({models: models, selectedMake: selectedMake });
  }

  modelChanged(event) {
    let selectModel = event.target.value;
    if(selectModel === 'Please select') {
      selectModel = '';
    }
    this.setState({selectModel: selectModel });
  }

  handleClick() {
    let make = _.find(this.props.make[0], (item) => { 
      return item.id === parseInt(this.state.selectedMake); 
    });
    let model = _.find(this.props.models[0], (item) => { 
      return item.id === parseInt(this.state.selectModel); 
    });
    
    let carDetails = {make, ...model};
    browserHistory.push({
      pathname:`/${this.state.selectedMake}/${this.state.selectModel}`,
      state: carDetails
    });
  }

  render() {
    let models = this.props.models[0];

    return ( 
      <div>
        <Dropdown data={this.props.make[0]} onChange={this.makeChanged.bind(this)} label="Select Car Make"/>
        <Dropdown data={this.state.models} onChange={this.modelChanged.bind(this)} label="Select Car Model" disabled={!this.state.selectedMake}/>
        <div>
        <button className="btn btn-default btn-lg pull-right" onClick={this.handleClick.bind(this)} disabled={!this.state.selectedMake && !this.state.selectModel}>View Details</button>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    models: state.models,
    make: state.make
  };
};

export default connect(mapStateToProps)(SearchPage);
