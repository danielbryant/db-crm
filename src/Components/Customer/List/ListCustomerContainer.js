import React, { Component } from 'react';

import CustomerList from './CustomerList'

import './ListCustomer.scss';

class ListCustomerCotainer extends Component {

  render() {
    return (
      <div id='ListCustomerContainer'>
        <CustomerList></CustomerList>
      </div>
    )
  }

}

export default ListCustomerCotainer;
