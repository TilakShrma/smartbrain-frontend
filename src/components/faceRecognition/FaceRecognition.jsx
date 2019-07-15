import React from 'react';

const FaceRecognition = ({ imageUrl} ) => {

    if(imageUrl.length){
    return (
        <div className="tc pa3">
            <img src={imageUrl} alt="faces" width="500px" height="auto"/>
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