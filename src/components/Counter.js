export default function Counter({ curr, handleIncrement, handleDecrement }) {
    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <h2>{curr}</h2>
            <button onClick={handleIncrement}>+</button>

        </>
    )
}