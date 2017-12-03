import React, { Component } from 'react';
import './canvas.css';
import PropTypes from "prop-types";

import { fabric } from 'fabric-browseronly';

class AvatarCanvas extends Component {
  constructor(props) {
    super(props);
    this.backgroundImage = {};
    this.hatImage = {};
  }

  _base64ToArrayBuffer(base64) {
    let binary_string =  window.atob(base64);
    let len = binary_string.length;
    let bytes = new Uint8Array( len );
    for (let i = 0; i < len; i++)        {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  componentWillReceiveProps(props) {
    console.log("updating hat to", props);
    this.setBackgroundImage(props.backgroundImage);
    this.setHatImage(props.hatImage);
  }

  componentDidMount() {

    let fabricCanvas = new fabric.Canvas();

    this.fabric = fabricCanvas;
    fabricCanvas.initialize(this.c, {
      height: 256,
      width: 256,
    });

    this.setBackgroundImage(this.props.backgroundImage || "/macdja38.jpg");
    this.setHatImage(this.props.hatImage || "/hat.png");
  }

  makeHTMLImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    })
  }

  loadAnyImage(something) {
    return new Promise((resolve, reject) => {
      if (typeof something === "string") {
        new fabric.Image.fromURL(something, resolve);
      } else {
        resolve(new fabric.Image(something));
      }
    })
  }

  setBackgroundImage(img) {
    this.loadAnyImage(img).then(i => {
      i.set({ left: 0, top: 0, width: 256, height: 256, selectable: false });
      /*if (this.backgroundImage.i) {
        this.fabric.remove(this.backgroundImage.i);
      }
      this.backgroundImage.i = i;
      this.fabric.add(i);*/
      this.fabric.backgroundImage = i;
      this.fabric.renderAll();
    });
  }

  setHatImage(img) {
    this.loadAnyImage(img).then(i => {
      i.set({ left: 0, top: 0, width: 150, height: 150 });
      if (this.hatImage.i) {
        this.fabric.remove(this.hatImage.i);
      }
      this.hatImage.i = i;
      this.fabric.add(i);
    });
  }


  render() {
    return (
      <div className="image-header">
        
        <canvas className ="relocate-image" height="256px" width="256px" ref={c => this.c = c} />
      </div>
    );
  }
}

AvatarCanvas.propTypes = {
  backgroundImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hatImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default AvatarCanvas;
