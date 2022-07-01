export default function DropdownDep({ setDeparture }) {

    return (
        <>
            <label for="departures">Choose a departure airport:</label>

            <select onChange={(e) => setDeparture(e.target.value)} id="departures">
                <option value="PRG">Prague</option>
                <option value="BER">Berlin</option>
                <option value="WAW">Warsaw</option>
                <option value="PED">Pardubice</option>
            </select>
        </>

    )
}