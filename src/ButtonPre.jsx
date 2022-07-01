// import { Button } from 'reactstrap';
export default function ButtonPre({ setOffset, offset, limit }) {

    return (
        <>
            {/* {offset > 0 && <Button
                className='buttton'
                color="primary"
                size="sm"
                onClick={() => setOffset(offset === 0 ? offset : offset - limit)}
            >
                Previous Flights!
            </Button>} */}

            {offset > 0 && <button className="btn" onClick={() => setOffset(offset === 0 ? offset : offset - limit)}>Previous flights</button>}
        </>
    )
}