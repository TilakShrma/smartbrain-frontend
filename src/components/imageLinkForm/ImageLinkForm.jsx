import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
       <div>
           <p className="f3 tc mt5 pa3">
               {'This magic brain will detect faces from your image.'}
           </p>
           <div className="flex item-center justify-center">
               <input type="text" className="f4 pa2 w-50" onChange={onInputChange}/>
               <button className=" grow f4 link ph3 pv2 dib white bg-blue pointer" onClick={onSubmit}>Detect</button>
           </div>
       </div>
    );
}

export default ImageLinkForm;