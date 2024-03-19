import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import Counter from './components/Counter'
import Step from './components/Step'

function reducer(state, action) {
  if (action.type === "increment") {
    console.log(state.redoArr)
    console.log(state.undoArr)
    return ({
      ...state,
      count: state.count + state.step,
      step: state.step,
      undoArr: [...state.undoArr, state.count]
    })
  } else if (action.type === "decrement") {
    return ({
      ...state,
      count: state.count - state.step,
      step: state.step,
      undoArr: [...state.undoArr, state.count]
    })
  } else if (action.type === "changeStep") {
    return ({
      ...state,
      count: state.count,
      step: action.step
    })
  } else if (action.type === "undo") {
    console.log(state.redoArr)
    return ({
      ...state,
      count: state.undoArr[state.undoArr.length - 1],
      undoArr: state.undoArr.slice(0, -1),
      redoArr: [...state.redoArr, state.count]

    })
  } else if (action.type === "redo") {
    return ({
      ...state,
      count: state.redoArr[state.redoArr.length - 1],
      redoArr: state.redoArr.slice(0, -1),
      undoArr: [...state.undoArr, state.count]
    })
  }


}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0, step: 1, undoArr: [], redoArr: [] })
  function handleIncrement() {
    dispatch({ type: "increment" })
  }
  function handleDecrement() {
    dispatch({ type: "decrement" })
  }
  function changeStep(e) {
    dispatch({ type: "changeStep", step: Number(e.target.value) })
  }
  function undoFunc() {
    dispatch({ type: "undo" })
  }
  function redoFunc() {
    dispatch({ type: "redo" })
  }

  return (
    <div className="App">
      <h1>
        Counter
      </h1>
      <h5>It increases by one or the number you set</h5>
      <Counter curr={state.count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <Step value={state.step} changeStep={changeStep} />
      <button onClick={undoFunc} disabled={!state.undoArr.length}>Undo</button>
      <button onClick={redoFunc} disabled={!state.redoArr.length}>Redo</button>

    </div>
  );
}

export default App;
