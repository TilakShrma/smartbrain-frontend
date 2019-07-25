import React from 'react';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
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
      imageUrl : '',
      box : {},
      route : 'signin',
      isSignedIn : false,
      user : {
        id : '',
        name : '',
        email : '',
        entries : 0,
        joined : '',
      }
    }
  }

  loadUser = (user) => {
    this.setState({user : user});
  }

  onInputChange = (event) => {
    this.setState({ input : event.target.value});
  }

  calculateFaceLocation(data) {
    const boundingBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol : boundingBox.left_col * width,
      topRow :  boundingBox.top_row * height,
      rightCol : width - (boundingBox.right_col * width),
      bottomRow : height - (boundingBox.bottom_row * height)

    }

  }

  drawFaceBox = (faceCoordinates) => {
    this.setState({box : faceCoordinates});
  }

  /**
   * TBD : functionality after clicking submit 
   */
  onSubmit = () => {
    
    this.setState({imageUrl : this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {

      if(response){
        fetch('http://localhost:3000/image', {
          method : 'put',
          headers : { 'Content-Type' : 'application/json'},
          body : JSON.stringify({
            id : this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries : count}))
        })
      }
      this.drawFaceBox(this.calculateFaceLocation(response));
    })
    .catch(error => console.log(error));

  }

  onRouteChange = (route) => {

    if(route === 'signout'){
      this.setState({isSignedIn : false})
    }else if(route === 'home'){
      this.setState({isSignedIn : true})
    }

    this.setState({route : route});
  }

  render(){
  return (
      <div className="App">
        <Particles 
          params={particleOptions} 
          className="particles"
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {
          this.state.route === 'home'
          ? <div>
              <Logo/>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
            </div>
          : (
              this.state.route === 'signin' || this.state.route === 'signout'
              ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            )
        }
        </div>
    );
  }
}

export default App;
