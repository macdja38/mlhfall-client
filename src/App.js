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

    const url = new URLSearchParams(window.location.search);

    const id = url.get("id");
    const hash = url.get("hash");
    const type = url.get("type");

    if (id && hash) {
      const cleanId = id.replace(/[^0-9]/g, "");
      const cleanHash = hash.replace(/[^0-9_a-f]/g, "");
      const cleanType = (type || 'png').replace(/[^a-z]/g, "");
      const avatarUrl = `./proxy/${cleanId}/${cleanHash}.${cleanType}`;
      this.state = {
        backgroundImage: avatarUrl,
        hatImage: "./santa_hat.png",
      };
    }

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
      <div className="wrapper">

        <div className="avatarEditor">
          <div className="image-header"><p> Image</p>

          </div>
          <div className="display-image">
            <Canvas backgroundImage={this.state.backgroundImage} hatImage={this.state.hatImage} />
          </div>
        </div>
        <div className="avatarSelect">
          <Avatar onNewBackground={this.onNewBackground} />
        </div>
        <div className="hatSelect">
          <Hats onHatChange={this.onHatChange} />
        </div>
      </div>);
  }
}

export default App;
