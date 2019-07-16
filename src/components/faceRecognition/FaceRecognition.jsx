import React from 'react';
import './faceRecognition.css';

const FaceRecognition = ({box, imageUrl} ) => {

    if(imageUrl.length){
    return (
        <div className="inputImg pa3">
            <img id="inputImage" src={imageUrl} alt="faces" width="500px" height="auto"/>
            <div className="bounding-box" style={{top: box.topRow, right:box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
       
    );
    } else {
        return (
            <div>
            </div>
        );
    }
    
}

export default FaceRecognition;