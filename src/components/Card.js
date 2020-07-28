import React, { Component } from "react";

export default class Card extends Component {
  handleClick = ev => {
    ev.preventDefault();
    this.setState({ error: null });

    //put this in a function to update user pool preferences
    console.log(ev.target.name);
  };

  render() {
    return (
      <>
        <li>
          <p className="question">{this.props.testData.Spa}</p>

          <p className="answer">HIDE ME: {this.props.testData.Eng}</p>
          <p>know this answer already?</p>
          <button className="yesButton" name="notes" onClick={this.handleClick}>
            notes
          </button>
          <button className="noButton" name="delete" onClick={this.handleClick}>
            delete
          </button>
        </li>
      </>
    );
  }
}
