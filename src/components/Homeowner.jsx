import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './forms.css';


class Homeowner extends Component {

    nextStep = (values) => {

        values.preventDefault();
        
        let ho = values.currentTarget.dataset.value;
    

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
    
        const lp = urlParams.get('lp_request_id');
        const gclid = urlParams.get('gclid');
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
        const gender = urlParams.get('gender');
        const married = urlParams.get('married');
        const education = urlParams.get('education_level');
        const credit = urlParams.get('credit_score');
        const tc = urlParams.get('tickets_or_claims_in_last_three_years');
        const sr = urlParams.get('ever_filed_sr22');
        const al = urlParams.get('active_license');




       this.props.setHome(ho)
        
        this.props.history.push('/month' + '?zip_code=' + zipCode + '&car_year=' + carYear + '&car_model=' + carModel + '&car_make=' + carMake + '&primary_usage=' + use + '&annual_mileage=' + miles + '&desired_coverage_level=' + cover + '&vehicle_ownership=' + own + '&has_insurance=' + has + '&current_insurance_provider=' + current + '&gender=' + gender + '&married=' + married + '&education_level=' + education + '&credit_score=' + credit + '&tickets_or_claims_in_last_three_years=' + tc + '&ever_filed_sr22=' + sr + '&active_license=' + al + '&homeowner=' + ho);
 

    }

    render() {
        return (
            <div className="back bg-white">
                <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Free Auto Insurance Quote</h2>
                </div>
                <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                    <div className="px-4 py-8 sm:px-10">


                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">

                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        50%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                            <div className="mt-6">

                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                        Are You A Homeowner?
                                         </span>
                                    </div>
                                </div>
                                <form>
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">



                                                <button className="monthButton  bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Yes" onClick={this.nextStep}> Yes </button>

                                                <button className="monthButton  bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="No" onClick={this.nextStep}> No </button>

                                                <div className="mb-6">
  <label>
    <input type="checkbox" name="field-name" defaultValue="example value" defaultChecked data-config-id="05_checkbox" />
    <span className="ml-1" data-config-id="05_label">I am also intersted in a <b>Home Insurance</b> Quote</span>
  </label>
</div>


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


export default withRouter(Homeowner)