import React from "react";
import Button from "./Button";
import Output from "./Output";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
    this.buttonPressed = this.buttonPressed.bind(this);
  }
  buttonPressed(button) {
    if (button === "=") {
      this.handleChange();
    } else if (button === "AC") {
      this.setState({
        result: "",
      });
    }
    // else if (button === 'DELETE') {
    //   this.setState({
    //     this.state.result - button
    //   })
    // }
    else {
      this.setState({
        result: this.state.result + button,
      });
    }
  }
  handleChange() {
    this.setState({
      result: eval(this.state.result),
    });
  }
  render() {
    return (
      <div>
        <Output result={this.state.result} className="output" />
        <Button buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;
