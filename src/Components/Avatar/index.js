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

  facebookSubmit() {
    let tgt = document.getElementById('facebookAvatar');
    let email = tgt.value;
    console.log(email);
  }

  render() {
    return (
      <div className ="style-buttons">
          
       
         <button onClick={() => this.avatarSubmit()}>Use avatar</button>
        <input id="inputAvatar" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
        <button onClick={() => this.avatarSubmit()}>Use avatar</button>
        
        {/*<br/>
        <label for="facebookImage">Enter your facebook email</label>
        <input id="facebookAvatar" type="email" name="facebookImage" />
        <button onClick={() => this.facebookSubmit()}>Use FacebookAvatar</button>*/}
      </div>
    )
  }


}

export default Avatar