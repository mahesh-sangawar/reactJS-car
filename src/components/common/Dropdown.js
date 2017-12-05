'use strict';

import React from 'react';

class Dropdown extends React.Component {
   
    render() {
        let optionItems = this.props.data.map((item) =>
            <option key={item.id} value={item.id}>{item.name}</option>
        );
        return(
            <div className="form-inline">
            <label htmlFor="make" className="col-sm-2 control-label">{this.props.label}</label>
            <select className="col-sm-4 form-control" id="make" onChange={this.props.onChange}>
            
            <option>Please select</option>
            {optionItems}
            </select>
          </div>
        );
    }
}

export default Dropdown;