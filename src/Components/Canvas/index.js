import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
  componentDidMount() {
    console.log(this.c);
    this.ctx = this.c.getContext("2d");
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(10, 10, 100, 100);
    this.makeHTMLImage("/macdja38.jpg").then(img => this.setBackgroundImage(img))
  }

  makeHTMLImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    })
  }

  setBackgroundImage(img) {
    this.ctx.drawImage(img, 0, 0);
  }

  render() {
    return (
      <div>
        <canvas height="256px" width="256px" ref={c => this.c = c}>

        </canvas>
      </div>
    );
  }
}

export default Canvas;
