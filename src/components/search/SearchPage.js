'use strict';

import React, { PropTypes } from 'react';
import $ from 'jquery';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

class SearchPage extends React.Component {
  render() {
    return ( 
      <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    );
  }
}

$(".dropdown-menu li a").click(function(){
  let selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

export default SearchPage;
