import React, { Component } from 'react';
import "./hats.css"


class Hats extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: ["./santa_hat.png", "top_hat.png"],

    };

    this.createHats = this.createHats.bind(this);

  }

  createHatSelect(img) {
    return () => {
      this.promisifyHat(img).then((img) => {
        this.props.onHatChange(img);
      })
    }
  }


  createHats(img) {
    return (
      <button className={"display-hats button"} onClick={this.createHatSelect(img)}><img src={img} alt="" /></button>
    );
  }


  promisifyHat(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });
  }

  addHat() {
    let tgt = document.getElementById('inputImage');
    let files = tgt.files;
    // FileReader support
    if (FileReader && files && files.length) {
      let fr = new FileReader();
      fr.onload = () => {
        let newList = this.state.list.slice(0);
        newList.push(fr.result);
        let newState = Object.assign({}, this.state, { list: newList });
        this.setState(newState);
      };
      fr.readAsDataURL(files[0]);
    }

  }

  render() {
    return (
      <div>
        <div className = "five">
          <div className = "hats-header">Avaliable Hats</div>
            <div className="display-hats">
          
            {this.state.list.map(this.createHats)}
            </div>
           </div>
        </div>
        <div className = "three">
          <input id="inputImage" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
          <button className="btn-upload buttons-style" onClick={() => this.addHat()}> submit</button>
        </div>
      </div>)
  }
}

export default Hats