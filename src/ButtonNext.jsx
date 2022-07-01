// import { Button } from 'reactstrap';
export default function ButtonNext({ setOffset, offset, limit, results }) {

    return (
        <>
            {/* {results._results >= offset + limit &&
                <Button
                    className='button'
                    color="primary" size="sm" onClick={() => setOffset(offset + limit)}>
                    Next Flights!
                </Button>} */}

            {results._results >= offset + limit && <button className="btn" onClick={() => setOffset(offset + limit)}>Next flights</button>}
        </>
    )
}