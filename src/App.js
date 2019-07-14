import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/ImageLinkForm';
import Particles from 'react-particles-js';
// import FaceRecognition from './components/Logo';

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

function App() {
  return (
    <div className="App">
      <Particles 
        params={particleOptions} 
        className="particles"
      />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* 
      
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
