import React, { Component } from 'react';
import './CustomerDetails.scss';

const contactData = require('../../Data/contact-data.json');

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      contactData: [],
      contactName: '',
      contactPosition: '',
      contactEmailAddress: ''
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeContactEvent = this.handleChangeContactEvent.bind(this);
    this.handleSubmitContact = this.handleSubmitContact.bind(this);
  }

  componentWillMount() {
    //load customer to edit
    let storedCustomer = localStorage.getItem('current-customer');
    if(storedCustomer) {
      this.setState({currentProduct: JSON.parse(storedCustomer)});
    }

    //load dummy contact data
    if(contactData) {
      this.setState({contactData: contactData});
    }
  }

  handleChangeEvent(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({currentProduct: {
      ...this.state.currentProduct,
      [name]: value
    }
    });
  }

  handleChangeContactEvent(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]:value})
  }

  handleSubmitContact(e) {
    e.preventDefault();

    let contactList = this.state.contactData;
    const uid = Date.now();
    const newContact = {
      uid: uid,
      name: this.state.contactName, 
      position: this.state.contactPosition, 
      emailAddress: this.state.contactEmailAddress
    }
    contactList.push(newContact);
    this.setState({contactData: contactList, contactName: "", contactPosition: "", contactEmailAddress: ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handle update");

    // NOTE : TIME CONSTRAINTS
    // this would be some API call to update the existing customer data

    // using local storage I would need to read in the entore array of customers, find the one by uid
    // and update it accordingly based on the changes on this form

  }

  render() {

    const { currentProduct, contactData } = this.state;

    return (
      <div className="container" id="CustomerDetails">

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12">
              <h2>Customer details</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <label>Company Name:</label>
              <input className="form-control" type="text" name="Name" value={currentProduct.Name} onChange={this.handleChangeEvent}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Company Address:</label>
              <input className="form-control" type="text" name="Address" value={currentProduct.Address} onChange={this.handleChangeEvent}></input>
              </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Company Logo URL:</label>
              <input className="form-control" type="text" name="LogoURL" value={currentProduct.LogoURL} onChange={this.handleChangeEvent}></input>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button type="submit" value="submit" className="btn" >Update</button>
            </div>
          </div>
        </form>

        {/* contactData */}
        <div className="row contact-row">
          <div className="col-12">
            <h4>Contacts:</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
          
            <form onSubmit={this.handleSubmitContact}>
              <label>Name:</label>
              <input className="form-control" type="text" name="contactName" value={this.state.contactName} onChange={this.handleChangeContactEvent}/>

              <label>Position:</label>
              <input className="form-control" type="text" name="contactPosition" value={this.state.contactPosition} onChange={this.handleChangeContactEvent}/>

              <label>Email Address:</label>
              <input className="form-control" type="text" name="contactEmailAddress" value={this.state.contactEmailAddress} onChange={this.handleChangeContactEvent}/>

              <br/>
              <button type="submit" value="submit" className="btn" >add</button>
            </form>
          </div>
        </div>

        <div className="row">
        {contactData.map((contact) => {
          return (
            <div className="col-12" key={contact.uid}>
              {contact.name} - ({contact.position}) - {contact.emailAddress}
            </div>
          )
        }
        )}
        </div>

      </div>
    )
  }

}

export default CustomerDetails;