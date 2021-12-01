import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import CarYear from './components/CarYear';
class App extends Component {


  state = {
    route: '/',
    routes: [
      '/',
      '/car-year',
    ],

    postData: {
      lp_campaign_id: '615db3dcbc748',
      lp_campaign_key: 'TFWr3YVyjdHx9qcgnCbK',
      TCPA_Consent: 'Yes',
      TCPA_Language: '',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      Landing_Page: 'auto.quotehound.com',
      useragent: navigator.userAgent,
      entrance_url: document.referrer,

      zip_code: '',
      car_year: ''
    }
  }

  changeRoute = () => {
    this.setState({
      route: '',
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
            <Switch>

            <Route path='/' exact>   

           <LandingPage

           setZipCode={(v) => {
             
            this.setState({
              postData: {
                ...this.state.postData,
                zip_code: v,
              },
            });
           }}

           />
            </Route>     

            <Route path='/car-year' component={CarYear} exact />    
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
