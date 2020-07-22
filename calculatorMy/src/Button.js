import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonPressed = this.buttonPressed.bind(this);
  }
  buttonPressed(event) {
    this.props.buttonPressed(event.target.value);
  }
  render() {
    return (
      <>
        <div className="container">
          {/* <div id="col"> */}
          <div className="row">
            <button
              className="AC jumbo"
              value="AC"
              onClick={this.buttonPressed}
            >
              AC
            </button>

            <button className="divide" value="/" onClick={this.buttonPressed}>
              /
            </button>

            <button className="multiply" value="*" onClick={this.buttonPressed}>
              *
            </button>
          </div>
          <div className="row">
            <button className="seven" value="7" onClick={this.buttonPressed}>
              7
            </button>
            <button className="eight" value="8" onClick={this.buttonPressed}>
              8
            </button>
            <button className="nine" value="9" onClick={this.buttonPressed}>
              9
            </button>
            <button className="minus" value="-" onClick={this.buttonPressed}>
              -
            </button>
          </div>
          <div className="row">
            <button className="four" value="4" onClick={this.buttonPressed}>
              4
            </button>
            <button className="five" value="5" onClick={this.buttonPressed}>
              5
            </button>
            <button className="six" value="6" onClick={this.buttonPressed}>
              6
            </button>
            <button className="plus" value="+" onClick={this.buttonPressed}>
              +
            </button>
          </div>
          <div className="row">
            <button className="one" value="1" onClick={this.buttonPressed}>
              1
            </button>
            <button className="two" value="2" onClick={this.buttonPressed}>
              2
            </button>
            <button className="three" value="3" onClick={this.buttonPressed}>
              3
            </button>
            <button className="del" val="DELETE" onClick={this.buttonPressed}>
              DEL
            </button>
          </div>
          <div className="row">
            <button className="zero" value="0" onClick={this.buttonPressed}>
              0
            </button>
            <button className="point" value="." onClick={this.buttonPressed}>
              .
            </button>
            <button className="equal" value="=" onClick={this.buttonPressed}>
              =
            </button>
          </div>
          {/* </div> */}
        </div>
        <p id="footer">Designed and Coded by</p>
        <p id="detail">Prateek Dixit</p>
      </>
    );
  }
}

export default Button;
