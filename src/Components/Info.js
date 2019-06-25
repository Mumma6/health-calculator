import React, { Component } from 'react'
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div className="container info">
        <div className="row">
          <div className="col-sm">
          <h1>What is TDEE?</h1>
          <p>
          TDEE, total daily energy expenditure, is the amount of energy in calories you burn per day and it includes all the energy you burn sleeping, working, exercising, and even eating. This is the amount of calories that is required per day to keep you are your current weight. After you know your total daily energy expenditure you can either add calories per day to gain bulk, or lower calories to cut fat.
          </p>
          </div>
          <div className="col-sm">
          <h1>What is BMR?</h1>
          Basal Metabolic Rate is the number of calories required to keep your body functioning at rest. BMR is also known as your body’s metabolism, therefore any increase to your metabolic weight such as exercise will increase your BMR.
          </div>
          <div className="col-sm">
          <h1>What is BMI?</h1>
          Body mass index, or BMI, is a measure of body size. It combines a person's weight with their height. The results of a BMI measurement can give an idea about whether a person has the correct weight for their height.
          </div>
         
      </div>
      </div>
    )
  }
}

export default Info
