export default function Step({value, changeStep}) {
    return (
        <div>
            <input type="range" id="step" name="step" min='1' max='10' value={value} onChange={ changeStep } />
            <label htmlFor="step"></label>
        </div>
       
        
    )
}