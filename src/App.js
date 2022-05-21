import { useState } from "react";
import "./styles.css";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [t, setT] = useState(0);
  function func() {
    setT(a + b);
  }
  function aChange(e) {
    debugger;
    setA(Number(e.target.value));
  }
  function bChange(e) {
    setB(Number(e.target.value));
  }
  return (
    <div className="App">
      <h1>Hello Mahendra</h1>
      <h2>Addition of 2 input numbers3!</h2>
      <input
        type="number"
        className="form-control"
        placeholder="Number 1"
        name="price"
        id="num1"
        onChange={aChange}
      />
      <input
        type="number"
        className="form-control"
        placeholder="Number 2"
        id="num2"
        onChange={bChange}
      />
      <button className="addButton" onClick={func}>
        Add numbers
      </button>
      <p id="output">{t}</p>
    </div>
  );
}
