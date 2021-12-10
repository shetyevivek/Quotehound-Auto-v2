import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import CarYear from './components/CarYear';
import CarMake from './components/CarMake';
import CarModel from './components/CarModel';
import PrimaryUse from './components/PrimaryUse';
import Mileage from './components/Mileage';
import CoverageLevel from './components/CoverageLevel';
import Ownership from './components/Ownership';
import HasInsurance from './components/HasInsurance';
import CurrentInsurer from './components/CurrentInsurer';
import Gender from './components/Gender';
import Married from './components/Married';
import Education from './components/Education';
import Credit from './components/Credit';
import TicketsClaims from './components/TicketsClaims';
import SR22 from './components/SR22';
import ActiveLicense from './components/ActiveLicense';
import Homeowner from './components/Homeowner';
import Month from './components/Month';
import Day from './components/Day';
import Year from './components/Year';
import Address from './components/Address';
import Name from './components/Name';
import EmailPhone from './components/EmailPhone';
import ThankYou from './components/ThankYou';
class App extends Component {


  state = {
    route: '/',
    routes: [
      '/',
      '/car-year',
      '/car-make',
      '/car-model',
      '/primary-use',
      '/miles',
      '/coverage-level',
      '/ownership',
      '/has-insurance',
      '/current-insurance',
      '/gender',
      '/relationship',
      '/education',
      '/credit',
      '/tickets-claims',
      '/sr-22',
      '/active-license',
      '/homeowner',
      '/month',
      '/day',
      '/year',
      '/addres',
      '/name',
      '/email-phone',
      '/thank-you'
    ],

    postData: {
      lp_campaign_id: '60ec8f7a44bdb',
      lp_campaign_key: 'ZLdtcNvV7nMghTG2PHpy',
      TCPA_Consent: 'Yes',
      TCPA_Language: 'By hitting Get My Free Quote above, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site. I also understand that my agreement to be contacted is not a condition of purchasing any property, goods, or services and that I may call (855) 701-3066 to speak with someone about obtaining an insurance quote. I acknowledge that I may revoke my consent by emailing “STOP” to optout@quotehound.com. I affirm that I have read and agree to this websites Privacy Policy and Terms of Use',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      landing_page: 'auto.quotehound.com',
      useragent: navigator.userAgent,
      entrance_url: '',

      zip_code: '',
      vehicle_year: '',
      vehicle_make: '',
      vehicle_model: '',
      first_name: '',
      last_name: '',
      phone_home: '',
      address: '',
      city: '',
      state: '',
      email_address: '',
      TCPA_Langauge: '',
      vehicle_primary_use: '',
      annual_mileage: '',
      desired_coverage_level: '',
      vehicle_ownership: '',
      additional_vehicles: 'no',
      contiunous_coverage: '1 Year',
      active_license: '',
      tickets_or_claims_in_last_three_years: '',
      ever_filed_sr22: '',
      homeowner: '',
      married: '',
      gender: '',
      education_level: '',
      credit_score: '',
      current_insurance_provider: '',
      has_insurance: '',
      dui: '',
      lp_caller_id: '',
      gclid: '',
    },
  };



  copyValuesToPostData2 = () => {
    var tempArray = {
      zip: this.state.postData.zip_code,
    };
    this.setState({ postData2: tempArray });
    // var MediaAlphaExchange = { 
    // 	"data": {
    // 	   "zip": "",
    // 	},
    // 	"placement_id": "YiPFAJc_r0i9fsZr0uP7vvicsinK3Q",
    // 	"sub_1": "test sub id",
    // 	"type": "ad_unit",
    // 	"version": 17
    //  };
    console.log("SetMA");
    //MediaAlphaExchange__load('mediaalpha_placeholder');
    return this.state.postData2;
  };




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
                      jornaya_lead_id: document.getElementById('leadid_token').value,
                      trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                      zip_code: v,
                    },
                  });
                }}

              />
            </Route>

            <Route path='/car-year' component={CarYear} exact />

            <Route path='/car-make' component={CarMake} exact />

            <Route path='/car-model' component={CarModel} exact />

            <Route path='/primary-use' exact>
              <PrimaryUse
                setPrimaryUse={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      vehicle_primary_use: v,
                      vehicle_year: document.getElementById('carYear').value,
                      vehicle_make: document.getElementById('carMake').value,
                      vehicle_model: document.getElementById('carModel').value,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/annual-mileage' exact>
              <Mileage
                setMileage={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      annual_mileage: v,
                    },

                  });
                }}
              />

            </Route>

            <Route path='/coverage-level' exact>

              <CoverageLevel
                setCoverageLevel={(v) => {
                  this.setState({

                    postData: {
                      ...this.state.postData,
                      desired_coverage_level: v,
                    },

                  });
                }}
              />

            </Route>

            <Route path='/ownership' exact>
              <Ownership
                setOwnership={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      vehicle_ownership: v,
                    },

                  });
                }}
              />
            </Route>

            <Route path='/has-insurance' exact>
              <HasInsurance
                setInsuranceStatus={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      has_insurance: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/current-insurance' exact>
              <CurrentInsurer
                currentInsurance={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      current_insurance_provider: v
                    },
                  });
                }}
              />
            </Route>

            <Route path='/gender' exact>
              <Gender
                setGender={(v) => {
                  this.setState({
                    postData: {

                      ...this.state.postData,
                      gender: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/relationship' exact>
              <Married
                setMarried={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      married: v,
                    },
                  });
                }}

              />
            </Route>

            <Route path='/education' exact>
              <Education
                setEducation={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      education_level: v,
                    },
                  });
                }}

              />


            </Route>

            <Route path='/credit' exact>
              <Credit
                setCredit={(v) => {
                  this.setState({

                    postData: {
                      ...this.state.postData,
                      credit_score: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/tickets-claims' exact>
              <TicketsClaims
                setTicketsClaims={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      tickets_or_claims_in_last_three_years: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/sr-22' exact>
              <SR22
                setSR={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      ever_filed_sr22: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/active-license' exact>
              <ActiveLicense

                setActive={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      active_license: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/homeowner' exact>

              <Homeowner

                setHome={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      homeowner: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/month' exact>

              <Month
                setMonth={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      month: v,
                    },
                  });

                }}
              />

            </Route>



            <Route path='/day' exact>

              <Day

                setDate={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      date: v,
                    },
                  });
                }}

              />
            </Route>



            <Route path='/year' exact >

              <Year

                setYear={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      year: v,
                    },
                  });
                }}

                setDOB={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      dob: v,
                    },

                  });
                }}
              />
            </Route>



            <Route path='/address' exact>

              <Address
                setAddress={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      address: v,
                    },
                  });
                }}
              />
            </Route>



            <Route path='/name' exact>

              <Name


                setFName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      first_name: v,
                    },
                  });


                }}

                setLName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      last_name: v,
                    },
                  });

                  console.log(this.state.postData)

                }}
              />
            </Route>

            <Route path='/email-phone' exact>

              <EmailPhone

                email_address={this.state.postData.email_address}
                phone_home={this.state.postData.phone_home}

                setEmail={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      email_address: v,
                    },
                  });
                }}

                setPhone={(v) => {
                  this.setState({
                    postData: {

                      ...this.state.postData,
                      phone_home: v,
                    },
                  });
                }}

                setURL={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      entrance_url: v,
                    }
                  })

                  console.log(this.state.postData)
                }}


                postData={this.state.postData}
              />
            </Route>

            <Route path='/thank-you' exact>
              <ThankYou />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
