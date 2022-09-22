import React from 'react';

const Actor = (props) => {
    const {name, img} = props;
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
            </div>
        </div>
    );
};

export {Actor};
