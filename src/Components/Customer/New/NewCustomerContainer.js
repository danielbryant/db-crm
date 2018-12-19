import React, { Component } from 'react';

import NewCustomer from './NewCustomer';

import './NewCustomer.scss';

class NewCustomerCotainer extends Component {

  render() {
    return (
      <div className="container" id='NewCustomerContainer'>
        <NewCustomer></NewCustomer>
      </div>
    )
  }

}

export default NewCustomerCotainer;
