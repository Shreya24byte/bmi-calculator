import { useState } from "react";
import "./BMICalculator.css";

export function BMICalculator() {
  const [weight, updateWeightValue] = useState("");
  const [height, updateHeightValue] = useState("");
  const [bmiValue, updateBMIValue] = useState(null);
  function calculateBMI() {
    console.log("button clicked", weight, height);
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMIValue = bmiValue.toFixed(2);
    updateBMIValue(roundedBMIValue);
  }
  function handleWeightInputChange(e) {
    updateWeightValue(e.target.value);
  }
  function handleHeightInputChange(e) {
    updateHeightValue(e.target.value);
  }
  function displayBMIValue() {
    if (bmiValue !== null) {
      return <div>Your BMI value is {bmiValue}</div>;
    }
  }
  function displayWeight() {
    if (bmiValue !== null) {
      if (weight !== "" && weight < 50) {
        return (
          <div>
            <p>Your suggested weight range is less than 50</p>
            <p>You are in a underweight range</p>
          </div>
        );
      } else if (weight > 67) {
        return (
          <div>
            <p>Your suggested weight range is more than 67</p>
            <p>You are in a overweight range</p>
          </div>
        );
      } else if (weight > 50 && weight < 67) {
        return (
          <div>
            <p>Your suggested weight range is between 50-67</p>
            <p>You are in a healthy weight range</p>
          </div>
        );
      }
    }
  }
  return (
    <div className="container d-flex flex-column form-container">
      <label className="me-4 mt-4">Weight in kgs:</label>
      <center>
        <input
          type="text"
          className="w-40"
          value={weight}
          onChange={handleWeightInputChange}
        ></input>
      </center>
      <label className="me-4 mt-4">Height in cms:</label>
      <center>
        <input
          type="text"
          className="w-40"
          value={height}
          onChange={handleHeightInputChange}
        ></input>
      </center>
      <center>
        <button
          type="button"
          className="btn btn-primary mt-4 mb-4 w-45"
          onClick={() => {
            calculateBMI();
            displayWeight();
          }}
        >
          Submit
        </button>
      </center>
      <div>{displayBMIValue()}</div>
      <div>{displayWeight()}</div>
    </div>
  );
}
