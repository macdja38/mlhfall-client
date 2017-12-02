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
      <div className="wrapper">
        <div className ="one">
            <div className ="image-header"><p> Image</p>
       
            </div>
            <div className = "display-image">
          <Canvas backgroundImage={this.state.backgroundImage} hatImage={this.state.hatImage}/>
        </div>
        </div>
      {/*       */}
        <div className= "display-hats ">
        <Hats onHatChange={this.onHatChange} />
        </div>
      </div>
    );
  }
}

export default App;
