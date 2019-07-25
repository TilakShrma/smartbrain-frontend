import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div className="tc">
            <div className="f3">
                {`Welcome ${name}, your current rank is...`}
            </div>
            <div className="f1">
                {`${entries}`}
            </div>
        </div>
    );
}

export default Rank;