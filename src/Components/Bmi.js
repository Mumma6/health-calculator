import React, { Component } from "react";
import "./Bmi.css";

class Bmi extends Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      bmi: "",
      message: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  calcBmi = () => {
    let heightSquared = ((this.state.height / 100) * this.state.height) / 100;
    let bmi = this.state.weight / heightSquared;

    // Set message
    let message = "";
    if (bmi >= 18.5 && bmi <= 24.99) {
      message = "You are in a healthy weight range";
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = "You are overweight";
    } else if (bmi >= 30) {
      message = "You are obese";
    } else if (bmi < 18.5) {
      message = "You are underweight";
    }

    this.setState({
      bmi: Math.round(bmi * 100) / 100,
      message: message
    });
  };

  submit = e => {
    e.preventDefault();
    this.calcBmi();
    this.setState({
      height: "",
      weight: ""
    });
  };

  render() {
    return (
      <div className="bmi">
        <h2>BMI</h2>
        <form onSubmit={this.submit}>
          <div>
            <label>
              <input
                className="form-control quantity"
                placeholder="cm"
                type="number"
                step="1"
                min="1"
                name="height"
                value={this.state.height}
                onChange={this.onChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              <input
                className="form-control quantity"
                placeholder="kg"
                type="number"
                step="1"
                min="1"
                name="weight"
                value={this.state.weight}
                onChange={this.onChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
          <br />
          <br />

          <h4>Your BMI is: {this.state.bmi}</h4>
          <h4>{this.state.message}</h4>
        </form>
      </div>
    );
  }
}

export default Bmi;
