import { Avatar } from '@nextui-org/react';
import React from 'react';
import { FcDebt } from 'react-icons/fc';
import Historytable from './historyTable/historytable';

const page = () => {
    return (
        <section>
            <div className='my-3 flex flex-col gap-4 md:flex md:flex-row md:gap-8'>
                <div className=' flex flex-col items-center bg-gradient-to-br from-violet-500 to-fuchsia-500 px-3 py-5 rounded-lg w-full md:w-80 max-w-md'>
                    <Avatar className='w-20 h-20 text-large my-2' isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    <h2 className='text-xl'> AR Burhan</h2>
                    <h3>Account type: <span>Admin</span> </h3>
                    <p>Staus: Active</p>
                    {/* <h4 className='text-[18px]'> Total borowed: 61</h4> */}
                </div>
                <div className=' flex flex-col items-center bg-gradient-to-br from-blue-500 to-teal-500 px-3 py-5 rounded-lg w-full md:w-80 max-w-md'>
                    <FcDebt className='w-20 h-20 text-large my-2' />
                    <h2 className='text-xl'>Total Dues: 20K</h2>
                    <h3 className='text-md'>Total Librarians: 230</h3>
                    <h3 className='text-md'>Total Users: 23 M</h3>
                    <h3 className='text-md'>Penalty: $ 23 M</h3>
                </div>
            </div>
            {/* <div className="w-full bg-gray-300 p-4 pt-16">
                <div>
                    <h2 className='pl-3 text-xl py-2 text-black '>Borowed History:</h2>
                    <Historytable />
                </div>
            </div> */}
        </section>
    );
};

export default page;