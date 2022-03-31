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
                
        let data = [{"year":"1899"},{"year":"1900"},{"year":"1901"},{"year":"1902"},{"year":"1903"},{"year":"1904"},{"year":"1905"},{"year":"1906"},{"year":"1907"},{"year":"1908"},{"year":"1909"},{"year":"1910"},{"year":"1911"},{"year":"1912"},{"year":"1913"},{"year":"1914"},{"year":"1915"},{"year":"1916"},{"year":"1917"},{"year":"1918"},{"year":"1919"},{"year":"1920"},{"year":"1921"},{"year":"1922"},{"year":"1923"},{"year":"1924"},{"year":"1925"},{"year":"1926"},{"year":"1927"},{"year":"1928"},{"year":"1929"},{"year":"1930"},{"year":"1931"},{"year":"1932"},{"year":"1933"},{"year":"1934"},{"year":"1935"},{"year":"1936"},{"year":"1937"},{"year":"1938"},{"year":"1939"},{"year":"1940"},{"year":"1941"},{"year":"1942"},{"year":"1943"},{"year":"1944"},{"year":"1945"},{"year":"1946"},{"year":"1947"},{"year":"1948"},{"year":"1949"},{"year":"1950"},{"year":"1951"},{"year":"1952"},{"year":"1953"},{"year":"1954"},{"year":"1955"},{"year":"1956"},{"year":"1957"},{"year":"1958"},{"year":"1959"},{"year":"1960"},{"year":"1961"},{"year":"1962"},{"year":"1963"},{"year":"1964"},{"year":"1965"},{"year":"1966"},{"year":"1967"},{"year":"1968"},{"year":"1969"},{"year":"1970"},{"year":"1971"},{"year":"1972"},{"year":"1973"},{"year":"1974"},{"year":"1975"},{"year":"1976"},{"year":"1977"},{"year":"1978"},{"year":"1979"},{"year":"1980"},{"year":"1981"},{"year":"1982"},{"year":"1983"},{"year":"1984"},{"year":"1985"},{"year":"1986"},{"year":"1987"},{"year":"1988"},{"year":"1989"},{"year":"1990"},{"year":"1991"},{"year":"1992"},{"year":"1993"},{"year":"1994"},{"year":"1995"},{"year":"1996"},{"year":"1997"},{"year":"1998"},{"year":"1999"},{"year":"2000"},{"year":"2001"},{"year":"2002"},{"year":"2003"},{"year":"2004"},{"year":"2005"},{"year":"2006"},{"year":"2007"},{"year":"2008"},{"year":"2009"},{"year":"2010"},{"year":"2011"},{"year":"2012"},{"year":"2013"},{"year":"2014"},{"year":"2015"},{"year":"2016"},{"year":"2017"},{"year":"2018"},{"year":"2019"},{"year":"2020"},{"year":"2021"},{"year":"2022"}];
        
        let t = [];

        for (let i = data.length - 1; i > -1; i--) {
            t.push(data[i])
        }

        const rY = t.filter((f, index) => index >= 24 ? f : '')

        setRemainingYears(rY);
        setYears(t)
        setLatestYear(t[0].year);

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
