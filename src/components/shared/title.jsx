import React from 'react';


const Title = ({ name }) => {
    return (
        <div className="text-center my-10" >
            <h1 className="text-2xl" >{name}</h1>
        </div>
    );
};

export default Title;