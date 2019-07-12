import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
// import FaceRecognition from './components/Logo';
// import ImageLinkForm from './components/ImageLinkForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      {/* 
      <ImageLinkForm/>
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
