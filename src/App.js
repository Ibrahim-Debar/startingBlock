import React, { Component } from 'react';
import {Howl, Howler} from 'howler';

import Sund from './failed.mp3'
import Sund2 from './success.mp3'


class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.tim1 = + new Date();

  }

  handleClick() {

    

    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));

     this.play();
  

  }

play(){


if(!this.state.isOn){
    this.tim1 = + new Date() + 3000;
   
      let  sound1 = new Howl({
        src: [Sund],
        // autoplay: true,
        // loop: true,
        volume: 0.5,
        onend: function() {


            setTimeout(()=>{
                          sound2.play();

            },3000)    
        },
        
      });

      sound1.play();


    var sound2 = new Howl({
        src: [Sund2],
        // autoplay: true,
        // loop: true,
        volume: 0.5,
        onplay: ()=> {

              console.log( this.tim1)

        }
        

      });

  }
  else {
    console.log(+new Date()-this.tim1)
  }

}

  render() {

    return (
      <button onClick={this.handleClick}>
        {this.state.isOn ? 'ON' : 'OFF'}
      </button>
    );


  }




}

export default App;
