import React, { Component } from "react";

export default class Card extends Component {
  handleClick = ev => {
    ev.preventDefault();
    this.setState({ error: null });

    //put this in a function to update user pool preferences
    console.log(ev.target.name);
  };

  render() {
    let diffArray = [
      this.props.testData.cardpool.Beginner,
      this.props.testData.cardpool.Intermediate
    ];
    let diff = diffArray[Math.floor(Math.random() * diffArray.length)];

    function randomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let diffB = randomInt(this.props.testData.cardpool.Beginner.length);

    let diffI = randomInt(this.props.testData.cardpool.Intermediate.length);

    let randomCardIndex;

    if (diff === this.props.testData.cardpool.Beginner) {
      randomCardIndex = diffB;
    }
    if (diff === this.props.testData.cardpool.Intermediate) {
      randomCardIndex = diffI;
    }

    return (
      <>
        <li>
          <p className="question">{diff[randomCardIndex].Spa}</p>

          <p className="answer">HIDE ME: {diff[randomCardIndex].Eng}</p>
          <p>know this answer already?</p>
          <button className="yesButton" name="yes" onClick={this.handleClick}>
            yes
          </button>
          <button className="noButton" name="no" onClick={this.handleClick}>
            no
          </button>
        </li>
      </>
    );
  }
}
