import React, { Component } from 'react';
import './avatar.css'
class Avatar extends Component {
  avatarSubmit() {
    console.log("add hat");
    let tgt = document.getElementById('inputAvatar');
    let files = tgt.files;
    // FileReader support
    if (FileReader && files && files.length) {
      let fr = new FileReader();
      fr.onload = () => {
        this.props.onNewBackground(fr.result);
      };
      fr.readAsDataURL(files[0]);
    }

  }

  render() {
    return (
      <div className ="style-buttons">
          
       
         <button onClick={() => this.avatarSubmit()}>Use avatar</button>
        <input id="inputAvatar" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
       
        </div> 
    
             
      
    )
  }


}

export default Avatar