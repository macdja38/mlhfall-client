import React, { Component } from 'react';

class Hats extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: ["./santa_hat.png", "top_hat.png"],
    };

    this.createHats = this.createHats.bind(this);

  }


  createHats(img) {
    return (
      <button id={"button"}><img src={img} alt="" onClick={() => this.sendHat(img)}/></button>
    );
  }


  sendHat(src) {
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
        let newState = Object.assign({}, this.state, {list: newList});
        this.setState(newState);
      };
      fr.readAsDataURL(files[0]);
    }




  }
  render() {
    return (
      <div>
      {this.state.list.map(this.createHats)}
      <input id="inputImage" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg"/>
      <button onClick={() => this.addHat()}> submit</button>
      </div>
    )
  }


}

export default Hats