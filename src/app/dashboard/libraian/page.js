/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { Avatar } from '@nextui-org/react';
import React from 'react';
import Lendbook from './lendbook';

const page = () => {
    return (
        <section>
            <div className=' flex flex-col items-center bg-gradient-to-br from-violet-500 to-fuchsia-500 px-3 py-5 rounded-lg w-full md:w-80 max-w-md'>
                <Avatar className='w-20 h-20 text-large my-2' isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                <h2 className='text-xl'> AR Burhan</h2>
                <h3>Account type: <span>Libraian</span> </h3>
                <p>Staus: Active</p>
            </div>
            <Lendbook />
        </section>
    );
};

export default page;