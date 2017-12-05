import React from 'react';
import {Link} from 'react-router';
import Table from '../common/Table';
import Card from '../common/Card';

class HomePage extends React.Component {
    constructor() {
      super();
      this.state = {
        tableData: [
          {
            "id": 100,
            "makeId": 10,
            "name": "911 Carrera 4s",
            "price": 297130,
            "imageUrl": "http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"
          },
          {
            "id": 110,
            "makeId": 10,
            "name": "Cayenne GTS",
            "price": 171605,
            "imageUrl": "http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"
          }
        ],
        cardData:{
          "make": "Audi",
          "name": "Cayenne GTS",
          "imageUrl": "http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png",
          "review": "The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016."
        }
      };
    }

    render() {
      return(
        <div>
          <Card data={this.state.cardData}/>
          <Table data={this.state.tableData}/>
        </div>
      );
    }
}

export default HomePage;
