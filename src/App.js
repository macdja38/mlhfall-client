import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hats from './Components/Hats'
import Canvas from './Components/Canvas';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "./macdja38.jpg",
      hatImage: "./santa_hat.png"
    };
    this.onHatChange = this.onHatChange.bind(this);
  }

  onHatChange(hat) {
    this.setState({hatImage: hat});
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Canvas backgroundImage={this.state.backgroundImage} hatImage={this.state.hatImage}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Hats onHatChange={this.onHatChange} />
      </div>
    );
  }
}

export default App;
