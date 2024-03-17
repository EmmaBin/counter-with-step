import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import Counter from './components/Counter'
import Step from './components/Step'

function App() {
  const [count, setCount] = React.useState(0)
  const [step, setStep] = React.useState(1)
  function increaseByOne() {
    setCount((prev) => prev + step)
  }

  function increaseByStep(e) {
    console.log(typeof e.target.value)
    setStep(prev => Number(e.target.value))
  }

  return (
    <div className="App">
      <h1>
        Counter
      </h1>
      <h5>It increases by one or the number you set</h5>
      <Counter curr={count} increaseByOne={increaseByOne} />
      <Step value={step} increaseByStep={increaseByStep} />

    </div>
  );
}

export default App;
