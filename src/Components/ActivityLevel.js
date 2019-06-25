import React, { Component } from "react";
import Bmi from "./Bmi";
import "./ActivityLevel.css";

class ActivityLevel extends Component {
  constructor() {
    super();
    this.state = {
      activity: 1.2,
      age: "",
      height: "",
      weight: "",
      tdee: "",
      bmr: "",
      gender: "male"
    };
  }

  handleActivityChange = e => {
    this.setState({ activity: parseFloat(e.target.value) });
  };

  handleGenderChange = e => {
    this.setState({ gender: e.target.value });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  calcTdee = () => {
    if (this.state.gender === "male") {
      let bmr =
        this.state.height * 6.25 +
        this.state.weight * 9.99 -
        this.state.age * 4.92 +
        5;

      let tdee = bmr * this.state.activity;

      this.setState({
        bmr: Math.floor(bmr),
        tdee: Math.floor(tdee)
      });
    } else {
      let bmr =
        this.state.height * 6.25 +
        this.state.weight * 9.99 -
        this.state.age * 4.92 -
        161;

      let tdee = bmr * this.state.activity;

      this.setState({
        bmr: Math.floor(bmr),
        tdee: Math.floor(tdee)
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.calcTdee();
    this.setState({
      age: "",
      height: "",
      weight: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="activity col">
            <div>
              <h2>Daily Activity Level Multiplier</h2>
              <br />
              <h4>Sedentary</h4>
              <p>Little or no excercise</p>
              <h4>Light</h4>
              <p>Light exercise/sports 1-3 days/week</p>
              <h4>Moderate</h4>
              <p>moderate exercise/sports 3-5 days/week)</p>
              <h4>Active</h4>
              <p>hard exercise/sports 6-7 days a week</p>
              <h4>Very Active</h4>
              <p>very hard exercise/sports & physical job or 2x training</p>
            </div>
          </div>
          <div className="activity col">
            <h2>TDEE and BMR</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="">
                <input
                  className="form-control quantity"
                  type="number"
                  step="1"
                  min="1"
                  name="age"
                  value={this.state.age}
                  placeholder="age"
                  onChange={this.handleChange}
                  required
                />
              </label>

              <label htmlFor="">
                <input
                  className="form-control quantity"
                  type="number"
                  step="1"
                  min="1"
                  name="height"
                  value={this.state.height}
                  placeholder="cm"
                  onChange={this.handleChange}
                  required
                />
              </label>

              <label htmlFor="">
                <input
                  className="form-control quantity"
                  type="number"
                  step="1"
                  min="1"
                  name="weight"
                  value={this.state.weight}
                  placeholder="kg"
                  onChange={this.handleChange}
                  required
                />
              </label>

              <div>
              <label>
                Pick your activity level:
                <select
                  className="form-control"
                  value={this.state.activity}
                  onChange={this.handleActivityChange}
                >
                  <option value={1.2}>Sedentary</option>
                  <option value={1.55}>Light</option>
                  <option value={1.65}>Moderate</option>
                  <option value={1.8}>Active</option>
                  <option value={2}>Very Active</option>
                </select>
              </label>
              </div>

              <div>

              <label>
                Gender:
                <select
                  className="form-control"
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>

              </div>

              <div>
                <button className="btn btn-info">Submit</button>
              </div>
            </form>

            <br />
            <br />

            <h4>Your BMR is {this.state.bmr} kcal</h4>

            <h4>Your TDEE is {this.state.tdee} kcal</h4>
          </div>

          <div className="activity col">
            <Bmi />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityLevel;
