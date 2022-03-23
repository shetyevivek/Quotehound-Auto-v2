import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

import axios from 'axios'

import './forms.css';


function CarYear() {
    const history = useHistory();

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);
    const zipCode = urlParams.get('zip_code');

    function nextStep(values) {
        values.preventDefault();
        let value = values.currentTarget.dataset.value;
        
        console.log('car year is: ' + document.getElementById('carYear').value)
        history.push('/car-make' + '?zip_code=' + zipCode +  '&car_year=' + value)
    }

    function select(event) {


        console.log(event.target.value);

        var carYear = event.target.value;

        history.push('/car-make' + '?zip_code=' + zipCode  + '&car_year=' + carYear)


    }

    const [year, setYears] = useState([]);
    const [remainingYears, setRemainingYears] = useState([]);
    const [latestYear, setLatestYear] = useState();
    const [flag, setFlag] = useState(true);
    const [currentData, setCurrentData] = useState('');
    const [currentData2, setCurrentData2] = useState('');

    useEffect(async () => {

        /*var apiToken = '95JiMPpKIW8z6iRJlUWLdYtb5dIS5JGONBHSmkAvGCX2Tq7kbdhYMJZbFpD9';

        let data = await axios.get('https://carmakemodeldb.com/api/v1/car-lists/get/years' + '?api_token=' + apiToken);*/

        const queryResult = await axios.post(
            "https://quotehound-auto-v2.herokuapp.com/", {
                query: `
                query {
                    CarYear {
                      year
                    }
                  }
                  `,
                });
                let data = queryResult.data.data.CarYear;

        let t = [];

        for (let i = data.length - 1; i > -1; i--) {
            t.push(data[i])
        }

        const rY = t.filter((f, index) => index >= 24 ? f : '')

        setRemainingYears(rY);
        setYears(t)
        setLatestYear(t[0].year);
    }, [])

    var city = localStorage.getItem('city')

    return (

        <div className="back bg-white">
            <div className="bg-blue-500 headerText justify-center align-middle text-center">
                <h2>Drivers in {city} Save Up to <b>$500</b>/Year</h2>
            </div>
            <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                <div className="px-4 py-8 sm:px-10">


                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">

                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                    12%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                            <div style={{ width: "12%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                        </div>
                    </div>


                    <div className="test">
                        <div className="mt-6">

                            <div>
                                <div className="relative flex justify-center text-sm leading-5 con">
                                    <span className="px-2 text-black-500 text-3xl bold header">
                                        What Year Is Your Vehicle?
                                    </span>
                                </div>
                            </div>
                            <form onSubmit={nextStep} >
                                <div className="mt-6">
                                    <div className="w-full flex text-sm leading-5">

                                        <div className="text-sm leading-5 buttonBlockRow">

                                            {year && latestYear && year.map((data, index) => {
                                                if (latestYear - data.year < 24) {
                                                    return (

                                                        <button onClick={nextStep} key={data.year} className="dateButton bg-blue-500 rounded text-white font-bold" data-value={data.year} value={data.year}>
                                                            {data.year}
                                                        </button>
                                                    )
                                                }
                                            })}
                                        </div>


                                    </div>

                                    <div className="mb-6 w-1/2 m-auto">
                                        <label className="block text-gray-500 text-sm font-semibold mb-2" >Other Years</label>
                                        <div className="relative">

                                            <select
                                                onChange={select}
                                                className="appearance-none w-full text-center p-4 text-md font-semibold leading-none bg-gray-50 rounded outline-none"
                                                name='field-name'
                                                placeholder="Select another year"
                                                id='selectYears'
                                            >

                                                {remainingYears.map((data, index) => {
                                                    return (
                                                        <option
                                                            key={data.year}
                                                            value={data.year}
                                                        >
                                                            {data.year}
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


export default withRouter(CarYear)