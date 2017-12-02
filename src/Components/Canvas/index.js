import React, { Component } from 'react';
import './canvas.css';

import def, {fabric, } from 'fabric-browseronly';

console.log(def);
console.log(fabric);

class AvatarCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {backgroundImage: {}, hatImage: {}};
  }

  componentDidMount() {

    let fabricCanvas = new fabric.Canvas();
    console.log(fabricCanvas);


    this.fabric = fabricCanvas;
    fabricCanvas.initialize(this.c, {
      height: 256,
      width: 256,
    });

    new fabric.Image.fromURL("/macdja38.jpg", (i) => {
      i.set({ left: 0, top: 0, width: 256, height: 256, selectable: false});
      this.fabric.add(i);
    });

    new fabric.Image.fromURL("/hat.png", (i) => {
      i.set({left: 0, top: 0, width: 150, height: 150});
      this.fabric.add(i);
    });

    this.makeHTMLImage("/macdja38.jpg").then(img => this.setBackgroundImage(img));
    this.makeHTMLImage("/hat.png").then(img => this.setHatImage(img))
  }

  makeHTMLImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    })
  }

  setBackgroundImage(img) {
    this.setState({backgroundImage: Object.assign({}, this.state.backgroundImage, {img})});
  }

  setHatImage(img) {
    this.setState({hatImage: Object.assign({}, this.state.hatImage, {img})});

  }


  render() {
    return (
      <div>
        <canvas height="256px" width="256px" ref={c => this.c = c}/>
      </div>
    );
  }
}

export default AvatarCanvas;
