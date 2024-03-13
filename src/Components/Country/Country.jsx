import { useState } from 'react';
import './Country.css';
const Country = ({ country, handelVisitedCountry }) => {
    // console.log(handelVisitedCountry);
    const { name, flags, cca3 } = country;

    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // setVisited(true)
        setVisited(!visited)
    }

    // const passWithParams = () => handelVisitedCountry(country);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>Code: {cca3}</small></p>
            <p><small></small></p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <button onClick={() => handelVisitedCountry(country)}>Mark Visited</button>
                {/* <button onClick={passWithParams}>Mark Visited</button> */}
                {/* <button onClick={handleVisited}>Visited</button> */}
                <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
                {/* {visited && 'I have visited This Country.'} */}
                {visited ? 'I have visited This Country.' : 'I want to visit this country.'}
            </div>
        </div>
    );
};

export default Country;