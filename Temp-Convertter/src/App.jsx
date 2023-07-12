import "./App.scss"
import { useState } from "react"


function App() {
  const [fromUnit, setFromUnit] = useState("Celcius")
  const [toUnit, setToUnit] = useState("Farenheit")
  const [temperature, setTemperature] = useState(0)
  const [result, setResult] = useState(null)

  const convert = () => {
    if (fromUnit === "Celcius" && toUnit === "Farenheit") {
      setResult((temperature * 9 / 5) + 32)
    }
    else if (fromUnit === "Celcius" && toUnit === "Kevin") {
      setResult(temperature + 273.15)
    }
    else if (fromUnit === "Farenheit" && toUnit === "Celcius") {
      setResult((temperature - 32) * 5 / 9)
    }
    else if (fromUnit === "Farenheit" && toUnit === "Kevin") {
      setResult((temperature - 32) * 5 / 9 + 273.15)
    }
    else if (fromUnit === "Kevin" && toUnit === "Celcius") {
      setResult(temperature - 273.15)
    }
    else if (fromUnit === "Kevin" && toUnit === "Farenheit") {
      setResult((temperature - 273.15) * 9 / 5 + 32)
    }
  }

  return (
    <>
      <div className="container">
        <h1>Temperature Conversion</h1>
        <label htmlFor="temperature">Enter the units for conversion</label>
        <input onChange={(e) => { setTemperature(e.target.value) }} type="numbers" id="temprature" name="temperature" placeholder="enter values: 25C or 99F" />
        <select name="unit" id="unit" onChange={e => {
          setFromUnit(e.target.value)
        }} >
          <option value="Celcius">Celcius</option>
          <option value="Farenheit">Fahrenheit</option>
          <option value="Kevin">Kevin</option>
        </select>
        <br />
        <br />
        <br />
        <span>TO</span>
        <select name="to_unit" id="to_unit" onChange={e => {
          setToUnit(e.target.value)
        }}  >
          <option value="Farenheit">Fahrenheit</option>
          <option value="Celcius">Celcius</option>
          <option value="Kevin">Kevin</option>
        </select>
        {/* <br /> */}
        <button id="btn" onClick={convert} >Convert the units</button>
        <br />
        <div style={
          result === null ? { display: "none" } : { display: "flex" }
        } className="container-result">
          <h2>The Conversion is:</h2>
          <p id="result"> {
            result + " " + toUnit
          } </p>
        </div>
      </div>

    </>
  )
}

export default App