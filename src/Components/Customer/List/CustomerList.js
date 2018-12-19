import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: []
    };
  }

  componentDidMount() {
    //load some data
    let rawData = localStorage.getItem('customer-data');
    let CustomerData = [];
    if(rawData) {
      CustomerData = JSON.parse(rawData);
      this.setState({customerData: CustomerData});
    }
  }

  gotoDetails(customer) {
    localStorage.setItem('current-customer', JSON.stringify(customer));
  }

  render() {

    const { customerData } = this.state;

    return (
      <div className="container" id='CustomerList'>
        <div className="row">
          <div className="col-12">
            <h2>Customer List</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <h5>Name</h5>
          </div>
          <div className="col-3">
            <h5>Address</h5>
          </div>
          <div className="col-3">
            <h5>LogoURL</h5>
          </div>
          <div className="col-3">
            <h5>Actions</h5>
          </div>
        </div>

        {customerData.map((customer) => {
          return (
            <div className="row customer-row" key={customer.uid}>
              <div className="col-3">
                <span>{customer.Name}</span>
              </div>
              <div className="col-3">
                <span>{customer.Address}</span>
              </div>
              <div className="col-3">
                <span>{customer.LogoURL}</span>
              </div>
              <div className="col-3">
                <Link onClick={() => this.gotoDetails(customer)} to="/customer-details">
                  <button value="" className="btn" >Edit</button>
                </Link>
                
                <button value="" className="btn" >Delete</button>
              </div>
            </div>
          )
        })}
        

      </div>
    )
  }

}

export default CustomerList;