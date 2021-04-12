import './App.css';
import React, {Component} from 'react';
import Validation from './Validation/validation';

class App extends Component {

  state = {
    text: 'kfhjksdf'
  };

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler} value={this.state.text}/>
        <Validation textLength={this.state.text.length}/>
      </div>
    );
  };
}

export default App;
