import { useEffect, useState } from "react";
import { DateTime } from 'luxon'
export default function Flights() {

    const url = `https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&limit=5&date_from=1/8/2022&partner=data4youcbp202106`;


    const [flights, setFlights] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false)


    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setFlights(data.data);
        setDataLoaded(true);
        console.log(data.data)
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(flights)

    return (
        <>
            {flights.map((flight, i) => (
                <div className="flight__card" key={flight.id}>
                    <h1>From:{flight.cityFrom} To:{flight.cityTo}</h1><br />
                    <h3>Time of departure: {flight.dTime}</h3>
                    <h3>Time of arrival: {flight.aTime}</h3>
                    <h3>Price: {flight.price} €</h3>
                </ div>
            ))}
        </>
    )
}