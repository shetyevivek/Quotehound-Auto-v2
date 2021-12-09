import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './forms.css';


class Married extends Component {


  onFinish = (values) => {

    values.preventDefault();
    
    let m = values.currentTarget.dataset.value;

    this.props.setMarried(m);

    //get URL params

   const urlSearch = window.location.search;

   const urlParams = new URLSearchParams(urlSearch);

   const carYear = urlParams.get('car_year');
   const zipCode = urlParams.get('zip_code');
   const carMake = urlParams.get('car_make');
   const carModel = urlParams.get('car_model')
   const use = urlParams.get('primary_usage');
   const miles = urlParams.get('annual_mileage');
   const cover = urlParams.get('desired_coverage_level');
   const own = urlParams.get('vehicle_ownership');
   const has = urlParams.get('has_insurance');
   const current = urlParams.get('current_insurance_provider');
   const gender = urlParams.get('gender')


   this.props.history.push('/education' + '?zip_code=' + zipCode + '&car_year=' + carYear + '&car_model=' + carModel + '&car_make=' + carMake + '&primary_usage=' + use + '&annual_mileage=' + miles + '&desired_coverage_level=' + cover + '&vehicle_ownership=' + own + '&has_insurance=' + has + '&current_insurance_provider=' + current + '&gender=' + gender + '&married=' + m);
 
  }


  render() {
    return (

      <div className="back bg-white"> 
       <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Auto Insurance Quote</h2>
                </div>
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  25%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
            <div className="relative flex justify-center text-sm leading-5 con">
              <span className="px-2 text-black-500 text-3xl bold header">
                What is Your relationship status?
              </span>
            </div>
          </div>
          <form onSubmit={this.onFinish} >
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

              <div className="text-sm leading-5 buttonBlock">
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Married" onClick={this.onFinish}>Married</button>


                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Single" onClick={this.onFinish}>Single</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Separated" onClick={(values) => this.onFinish(values)}>Separated</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Divorced" onClick={(values) => this.onFinish(values)}>Divorced
</button>

          <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Widowed" onClick={(values) => this.onFinish(values)}>Widowed</button>       
              </div>
            </div>
          </div>

          </form>

          </div>

          </div>
        </div>

       


      </div>

      </div>
       

    )
  }
}

export default withRouter(Married)