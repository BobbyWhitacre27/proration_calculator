import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import './App.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [cost, setCost] = useState(0)
  const [moveStatus, setMoveStatus] = useState("")
  const [result, setResult] = useState(0)

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  const selectedDate = startDate.getDate()
  const selectedMonth = startDate.getMonth() + 1
  const selectedYear = startDate.getFullYear()

  const daysInCurrentMonth = getDaysInMonth(selectedYear, selectedMonth)

  const moveInRatio = (daysInCurrentMonth + 1 - selectedDate) / daysInCurrentMonth

  const moveOutRatio = selectedDate / daysInCurrentMonth

  const resultCurrency = result.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const handleCost = event => {
    setCost(event.target.value)
  }

  const handleMoveStatus = event => {
    setMoveStatus(event.target.value)
  }

  const handleCalculate = () => {
    if (moveStatus === "moveOut") {
      const moveOutCost = moveOutRatio * cost
      return setResult(moveOutCost)
    }
    else if (moveStatus === "moveIn") {
      const moveInCost = moveInRatio * cost
      return setResult(moveInCost)
    }
    else {
      return setResult(0)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351550.png" className="App-logo" alt="logo" />
        <h1>Rent Proration Calculator</h1>

        <div>
          Date <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div>
          $ <input type="text" placeholder="Cost" onChange={handleCost}></input>
        </div>
        <div>
          <select onChange={handleMoveStatus}>
            <option value=''>Select</option>
            <option value="moveIn">Move-in</option>
            <option value="moveOut">Move-out</option>
          </select>
        </div>
        <div>
          <button onClick={handleCalculate}>Calculate!</button>
        </div>
        <div id="answerDiv">
          <h2>Amount owed</h2>
          <h2>{resultCurrency}</h2>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <h1 class="bg-red-400">Hello Tailwind!</h1>

      </header>







    </div>
  );
}

export default App;
