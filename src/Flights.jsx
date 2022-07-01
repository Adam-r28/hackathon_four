import { useEffect, useState } from "react";
import { DateTime } from 'luxon'
import DropdownDep from "./DropdownDep";
import DropdownArr from "./DropdownArr";
import ButtonPre from "./ButtonPre";
import ButtonNext from "./ButtonNext";

export default function Flights() {

    const [flights, setFlights] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false)
    const [departure, setDeparture] = useState("PRG")
    const [arrival, setArrival] = useState("VLC")
    const [results, setResults] = useState([])

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);

    const url = `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${arrival}&offset=${offset}&limit=${limit}&date_from=1/8/2022&partner=data4youcbp202106`;


    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setFlights(data.data);
        setDataLoaded(true);
        setResults(data)
        // console.log(data)
    };

    useEffect(() => {
        fetchData();
    }, [departure, arrival, offset, limit]);

    // console.log(flights)

    return (
        <>
            <DropdownDep setDeparture={setDeparture} /><br />
            <DropdownArr setArrival={setArrival} />


            {dataLoaded ?
                (!!flights.length) ? (
                    <div>
                        {flights.map((flight, i) => (
                            <div className="flight__card" key={flight.id}>
                                <h1>From: {flight.cityFrom} To: {flight.cityTo}</h1><br />
                                <h3>Time of departure: {flight.dTime}</h3>
                                <h3>Time of arrival: {flight.aTime}</h3>
                                <h3>Price: {flight.price} €</h3>
                            </ div>))}
                    </div>) : (<h1>Sorry, no flight is currently avaiable.</h1>)
                : <h1>Data loading..</h1>}
            <ButtonPre offset={offset} limit={limit} setOffset={setOffset} />
            <ButtonNext offset={offset} limit={limit} setOffset={setOffset} flights={flights} results={results} />


        </>

    )
}