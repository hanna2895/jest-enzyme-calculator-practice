import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dislayValue: '0', // value to be displayed in <Display />
      numbers: [], // values to be displayed in number <Keys />
      operators: [], // values to be displayed in operator <Keys />
      selectedOperator: '', // operator selected for math operation
      storedValue: '',
    }
  }

  callOperator() {
    console.log('call operation');
  }

  setOperator() {
    console.log('set operation');
  }

  updateDisplay() {
    console.log('update display');
  }

  render() {
    return (
      <div className="calculator-container" />
    );
  }
}

export default Calculator;
