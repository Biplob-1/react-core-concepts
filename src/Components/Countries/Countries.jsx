import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelVisitedCountry = country => {
        // console.log(country);
        // console.log('add this to your country');
        // visitedCountries.push(country); doesnot work
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Countries: {countries.length}</h1>
            <div>
                <h3 style={{ textAlign: 'center' }}>Visited Countries:{visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countris-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handelVisitedCountry={handelVisitedCountry}
                        country={country}></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;