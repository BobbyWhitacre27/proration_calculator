import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [cost, setCost] = useState(0)
  const [moveStatus, setMoveStatus] = useState("")
  const [result, setResult] = useState(0)

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  const currentDate = startDate.getDate()
  const currentMonth = startDate.getMonth() + 1
  const currentYear = startDate.getFullYear()

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth)

  const moveInRatio = (daysInCurrentMonth + 1 - currentDate) / daysInCurrentMonth

  const moveOutRatio = currentDate / daysInCurrentMonth

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
    else{
      return setResult(0)
    }
  }


    // console.log({ startDate })
    // console.log({ currentDate })
    // // console.log({currentMonth})
    // // console.log({currentYear})
    // console.log({ daysInCurrentMonth })
    // console.log({ ratio: moveInRatio })

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://cdn-icons-png.flaticon.com/512/5351/5351550.png" className="App-logo" alt="logo" />
          <h1>Rent Proration Calculator</h1>

          <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>

          <input type="text" placeholder="Cost" onChange={handleCost}></input>

          <select onChange={handleMoveStatus}>
            <option value=''>Select</option>
            <option value="moveIn">Move-in</option>
            <option value="moveOut">Move-out</option>
          </select>


          <button onClick={handleCalculate}>Calculate</button>

          <h2>Amount owed</h2>
          {result}
          <div></div>
        </header>
        <body>

        </body>
      </div>
    );
  }

  export default App;
