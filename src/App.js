import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


import './App.css';

const particleOptions = {
  "particles": {
    "number": {
        "value": 200
    },
    "size": {
        "value": 3
    }
  },
  "color": {
    "value": "#E86363"
}
}

const app = new Clarifai.App({apiKey: '79950ea53abc48a1a39f5c6038324b8e'});

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl : ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input : event.target.value});
  }

  /**
   * TBD : functionality after clicking submit 
   */
  onSubmit = () => {
    
    this.setState({imageUrl : this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
  );

  }

  render(){
  return (
      <div className="App">
        <Particles 
          params={particleOptions} 
          className="particles"
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
