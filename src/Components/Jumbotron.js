import React, { Component } from "react";
import "./Jumbotron.css"

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">
          Health Calculator is a great way to find out how many calories you need per day, you can also find out your Body Mass Index and overall health. 
        </p>
        <hr className="my-4" />
       
      </div>
    );
  }
}

export default Jumbotron;
