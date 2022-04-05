import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

import axios from 'axios'

import './forms.css';

function CarModel(props){

    const [model, setModel] = useState([])
    const [remainingModel, setRemainingModel] = useState([])
    const [latestModel, setLatestModel] = useState()

   
    useEffect(async () => {
        /*var apiToken =
          '95JiMPpKIW8z6iRJlUWLdYtb5dIS5JGONBHSmkAvGCX2Tq7kbdhYMJZbFpD9'
        let data = await axios.get(
          'https://carmakemodeldb.com/api/v1/car-lists/get/models' +
            '/' +
            carYear +
            '/' +
            carMake +
            '?api_token=' +
            apiToken
        )*/

        const queryResult = await axios.post(
            "https://quotehound-auto-v2.graphcdn.app/", {
                query: `
                query {
                    cars(year: "${carYear}") {
                      get_car_models(make: "${carMake}") {
                        CarModel {
                          model
                        }
                      }
                    }
                  }
                  `,
                });
                let data = queryResult.data.data.cars.get_car_models.CarModel;

        let t = []
        for (let i = 0; i < data.length; i++) {
          t.push(data[i])
        }
        const rY = t.filter((f, index) => (index >= 100 ? f : ''))
        setRemainingModel(rY)
        setModel(t)
        setLatestModel(t[0].model)
      }, [])

      const history = useHistory();

      const urlSearch = window.location.search;
      const urlParams = new URLSearchParams(urlSearch);
      const carYear = urlParams.get('car_year');
      const zipCode = urlParams.get('zip_code');
      const carMake = urlParams.get('car_make');
  
    function nextStep(values) {

        values.preventDefault();
        
        let value = values.currentTarget.dataset.value;


        history.push('/primary-use'+ '?zip_code=' + zipCode +  '&car_year=' + carYear + '&car_model=' + carMake + '&car_make=' + value)

    }

    function select(event) {
        
        var carModel = event.target.value;

        history.push('/primary-use'+ '?zip_code=' + zipCode +  '&car_year=' + carYear + '&car_model=' + carMake + '&car_make=' + carModel)

    }
 
    return(
<div className="back bg-white">
            <div className="bg-blue-500 headerText justify-center align-middle text-center">
                <h2>Drivers Save Up to <b>$500</b>/Year</h2>
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
                                        What Model Is Your {carMake}?
                                    </span>
                                </div>
                            </div>
                            <form onSubmit={nextStep} >
                                <div className="mt-6">
                                    <div className="w-full flex text-sm leading-5">

                                        <div className="text-sm leading-5 buttonBlockRow">
                                            {model && 
                                                latestModel && 
                                                    model.map((data, index) => {
                                                if(index < 100){
                                                    return(
                                                        <button onClick={nextStep} key={data.model} className="monthButton bg-blue-500 rounded text-white font-bold" data-value={data.model} value={data.model}>
                                                        {data.model}
                                                    </button>
                                                    )
                                                }
                                            })}
                                        </div>


                                    </div>

                                    

                                </div>

                            </form>

                        </div>

                    </div>
                </div>




            </div >
        </div >

    )

}
export default withRouter(CarModel)
