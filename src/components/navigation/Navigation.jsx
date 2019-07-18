import React from 'react';

const Navigation = ({ onRouteChange , isSignedIn }) => {
    
    if(isSignedIn){
        return(
            <nav>
                <p onClick={() => onRouteChange('signout')} className="f3 fr mt2 mr2 tr link dim pointer underline pa3 blue">Sign Out</p>
            </nav>  
        );
    }else {
        return(
            <nav>
                <p onClick={() => onRouteChange('signin')} className="f3 fr mt2 mr2 tr link dim pointer underline pa3 blue">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="f3 fr mt2 mr2 tr link dim pointer underline pa3 blue">Register</p>
            </nav>
        );
    }
    
  
}

export default Navigation;