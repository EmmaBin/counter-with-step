export default function Step({value, increaseByStep}) {
    return (
        <div>
            <input type="range" id="step" name="step" min='1' max='10' value={value} onChange={ increaseByStep } />
            <label htmlFor="step"></label>
        </div>
       
        
    )
}