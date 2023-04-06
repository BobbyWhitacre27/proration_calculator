import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  } 

  const currentDate = startDate.getDate()
  const currentMonth =  startDate.getMonth() + 1
  const currentYear = startDate.getFullYear()

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth)

  const ratio = currentDate / daysInCurrentMonth
  

  console.log({startDate})
  console.log({currentDate})
  console.log({currentMonth})
  console.log({currentYear})
  console.log({daysInCurrentMonth})
  console.log({ratio})

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351550.png" className="App-logo" alt="logo" />
        <h1>Rent Proration Calculator</h1>

        <div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>

        <input type="text" placeholder="Cost"></input>

        <select>
          <option value=''></option>
          <option>Move-in</option>
          <option>Move-out</option>
        </select>
  
      
        <button>Calculate</button>

        <h2>Amount owed</h2>

        <div></div>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
