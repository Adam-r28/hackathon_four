export default function DropdownArr({ setArrival, onChange }) {

    return (
        <>
            <label for="arrivals">Choose a arrival airport:</label>

            <select onChange={(e) => setArrival(e.target.value)} id="arrivals">
                <option value="VLC">Valencia</option>
                <option value="BCN">Barcelona</option>
                <option value="MAD">Madrid</option>
                <option value="MXP">Milano</option>
                <option value="ATH">Athens</option>
            </select>
        </>

    )
}