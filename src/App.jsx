import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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

      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
         
          <div class="mx-auto max-w-lg text-center mb-8">
            <h1 class="text-3xl font-bold sm:text-5xl"> Rent Proration Calculator</h1>
          </div>

          <div class="text-black">
            <DatePicker inline selected={startDate}  onChange={(date) => setStartDate(date)}  />
          </div>

          <div>
            <input type="text" className="cost" placeholder="Cost" onChange={handleCost}></input>
          </div>

          <div>
            <select onChange={handleMoveStatus}>
              <option value="">M/I or M/O?</option>
              <option value="moveIn">Move-in</option>
              <option value="moveOut">Move-out</option>
            </select>
          </div>

          <div>
            <button onClick={handleCalculate} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Calculate
            </button>
          </div>

          <div id="answerDiv">
            
            <h2>{resultCurrency}</h2>
          </div>

        </div>

        <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.pexels.com/photos/3225640/pexels-photo-3225640.jpeg?auto=compress&cs=tinysrgb&w=800"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>








    </div>
  );
}

export default App;
