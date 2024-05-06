/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';

const page = ({ params }) => {
    const { dept } = params;
    return (
        <div>
            <p>{dept}</p>
        </div>
    );
};

export default page;