import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Components/Canvas';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: ["./santa_hat.png", "top_hat.png"],
    };

    this.createHats = this.createHats.bind(this);

  }

  createHats(img) {
    return (
      <button id={"button"}><img src={img} alt="" onClick={this.sendHat(img)}/></button>
    );
  }


  sendHat(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Canvas/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.list.map(this.createHats)}

      </div>
    );
  }
}

export default App;
