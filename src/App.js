import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.scss';

import ListCustomerContainer from './Components/Customer/List/ListCustomerContainer';
import NewCustomerCotainer from './Components/Customer/New/NewCustomerContainer';
import CustomerDetails from './Components/Customer/CustomerDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-nav">

          <ul>
            <li><Link to='/customer-list'>List Customers</Link></li>
            <li><Link to='/new-customer'>New Customer</Link></li>
          </ul>

          <hr />

          <Switch>
            <Route exact path='/' component={ListCustomerContainer} />
            <Route path='/customer-list' component={ListCustomerContainer} />
            <Route path='/new-customer' component={NewCustomerCotainer} />
            <Route path='/customer-details' component={CustomerDetails} />            
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
