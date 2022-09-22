import React from 'react';

const User = ({user}) => {
    const {name, id, email} = user;
    return (
        <div>
            {id} -- {name} -- {email}
        </div>
    );
};

export {User};
