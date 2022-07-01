export default function ButtonNext({ setOffset, offset, limit, results }) {

    return (
        <>
            {results._results >= offset + limit && <button onClick={() => setOffset(offset + limit)}>Next flights</button>}
        </>
    )
}