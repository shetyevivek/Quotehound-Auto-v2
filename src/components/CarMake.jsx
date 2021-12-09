import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

import axios from 'axios'

import './forms.css';


function CarMake(props) {

    const [make, setMake] = useState([])
    const [remainingMake, setRemainingMake] = useState([])
    const [latestMake, setLatestMake] = useState()


    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);
    const carYear = urlParams.get('car_year');
    const zipCode = urlParams.get('zip_code');

  


    useEffect(async () => {
        var apiToken =
          '95JiMPpKIW8z6iRJlUWLdYtb5dIS5JGONBHSmkAvGCX2Tq7kbdhYMJZbFpD9'
        let data = await axios.get(
          'https://carmakemodeldb.com/api/v1/car-lists/get/makes' + '/' + carYear + '?api_token=' +
            apiToken
        )
        let t = []
        for (let i = 0; i < data.data.length; i++) {
          t.push(data.data[i])
          
        }
        
        const rY = t.filter((f, index) => (index >= 16 ? f : ''))
        setRemainingMake(rY)
     
        
        
        setMake(t)
         setLatestMake(t[0].make)
         
    
        
      }, [])

      const history = useHistory();

      function nextStep(values) {

          values.preventDefault();
          let value = values.currentTarget.dataset.value;   
          history.push('/car-model' + '?zip_code=' + zipCode +  '&car_year=' + carYear + '&car_make=' + value)

      }

      function select(event) {

        var carMake = event.target.value;
        history.push('/car-model' + '?zip_code=' + zipCode +  '&car_year=' + carYear + '&car_make=' + carMake)

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
                                    18%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                            <div style={{ width: "18%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                        </div>
                    </div>


                    <div className="test">
                        <div className="mt-6">

                            <div>
                                <div className="relative flex justify-center text-sm leading-5 con">
                                    <span className="px-2 text-black-500 text-3xl bold header">
                                        What Make Is Your Vehicle?
                                    </span>
                                </div>
                            </div>
                            <form >
                                <div className="mt-6">
                                    <div className="w-full flex text-sm leading-5">

                                        <div className="text-sm leading-5 buttonBlockRow">

                                           {make && latestMake && make.map((data, index) => {
                                               if(index <  16){
                                                   return (
                                                    <button key={data.make}   onClick={nextStep} className="monthButton bg-blue-500 rounded text-white font-bold" data-value={data.make} value={data.make}>
                                                    <span>{data.make}</span>
                                                </button>
                                                   
                                                )
                                               }
                                           })}
                                         </div>


                                    </div>

                                    <div className="mb-6 w-1/2 m-auto">
                                        <label className="block text-gray-500 text-sm font-semibold mb-2" >Other Makes</label>
                                        <div className="relative">

                                            <select
                                                
                                                className="appearance-none w-full text-center p-4 text-md font-semibold leading-none bg-gray-50 rounded outline-none form-select"
                                                name='field-name'
                                                onChange={select}
                                                
                                            >

                                                {remainingMake.map((data, index) => {
                                                    return (
                                                        <option
                                                            key={data.make}
                                                            value={data.make}
                                                        >
                                                            {data.make}
                                                        </option>
                                                    )
                                                })}

                                            </select>


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

export default withRouter(CarMake)