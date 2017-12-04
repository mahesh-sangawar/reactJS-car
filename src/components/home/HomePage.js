import React from 'react';
import {Link} from 'react-router';
import Table from '../common/Table';

class HomePage extends React.Component {
    constructor() {
      super();
      this.state = {
        tableData: []
      };
    }

    componentDidMount (){  
      this.models();
    }

    models() {
      $.get('/api/models').then(res => this.setState({tableData: res.data})).catch(error => {
        console.log('Error from fetching data', error);
      });
    }

    render() {
      return(
        <div className="jumbotron">
          <Table data={this.models}/>
        </div>
      );
    }
}

export default HomePage;