import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const input = ["Apple", "Apple", "Orange", "Apple"];

const fruits = { Apple: 0, Orange: 0 };

function App() {
  const [totalCost, setTotalCost] = useState(0);

  const handleCheckout = (input) => {
    let fruitsChart = fruits;
    input.forEach((item) => {
      fruitsChart[item]++;
    });
    let fruitsCost = calculateTotalCost(fruitsChart);
    setTotalCost(fruitsCost);

    //Set fruits to initial state
    fruitsChart.Apple = 0;
    fruitsChart.Orange = 0;
  };

  const calculateTotalCost = (items) => {
    let appleCost = items.Apple * 0.6;
    let orangeCost = items.Orange * 0.25;

    return appleCost + orangeCost;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{input}</p>
        <p>Total Cost: £{totalCost}</p>
        <button onClick={() => handleCheckout(input)}>Checkout</button>
      </header>
    </div>
  );
}

export default App;
