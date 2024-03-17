export default function Counter({ curr, increaseByOne }) {
    return (
        <>
            <h2>{curr}
                <button onClick={increaseByOne}>+</button>
            </h2>

        </>
    )
}