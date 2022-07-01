export default function ButtonPre({ setOffset, offset, limit }) {

    return (
        <>

            {offset > 0 && <button onClick={() => setOffset(offset === 0 ? offset : offset - limit)}>Previous flights</button>}
        </>
    )
}