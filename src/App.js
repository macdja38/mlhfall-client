import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hats from './Components/Hats';
import Avatar from './Components/Avatar';
import Canvas from './Components/Canvas';
import { isGif, parseGif } from './gifToCanvasList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "./macdja38.jpg",
      hatImage: "./santa_hat.png",
    };
    this.onHatChange = this.onHatChange.bind(this);
    this.onNewBackground = this.onNewBackground.bind(this);
  }

  onNewBackground(background) {
    let isAGif = isGif(background);
    let frames = [];
    if (isAGif) {
      frames = parseGif(background);
    }
    this.setState({ isAGif, backgroundImage: background, frames })
  }

  onHatChange(hat) {
    this.setState({ hatImage: hat });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Canvas backgroundImage={this.state.backgroundImage} hatImage={this.state.hatImage} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hats</p>
        <Hats onHatChange={this.onHatChange} />
        <br />
        <p>Avatar</p>
        <Avatar onNewBackground={this.onNewBackground} />
      </div>
    );
  }
}

export default App;
