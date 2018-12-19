import React, { Component } from 'react';


class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Address: '',
      LogoURL: '',
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEvent(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    //read existing customer data from local storage
    let rawData = localStorage.getItem('customer-data');
    let customerData = [];
    if(rawData) {
      customerData = JSON.parse(rawData)
    }

    const uid = Date.now();
    const newCustomer = {...this.state, uid: uid};
    
    customerData.push(newCustomer);

    //store customer data back to local storage
    localStorage.setItem('customer-data', JSON.stringify(customerData));
    this.setState({Name: '', Address: '', LogoURL: ''});
    
  }

  render() {
    return (
      <div className="container" id='NewCustomer'>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12">
              <h2>New Customer</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <label>Company Name:</label>
              <input className="form-control" type="text" name="Name" value={this.state.Name} onChange={this.handleChangeEvent}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Company Address:</label>
              <input className="form-control" type="text" name="Address" value={this.state.Address} onChange={this.handleChangeEvent}></input>
              </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Company Logo URL:</label>
              <input className="form-control" type="text" name="LogoURL" value={this.state.LogoURL} onChange={this.handleChangeEvent}></input>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button type="submit" value="submit" className="btn" >Save</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default NewCustomer;