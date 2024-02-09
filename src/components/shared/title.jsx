import React from 'react';
import moment from 'moment';

const Title = ({ name }) => {
    const currentDates = moment().format('Do MMMM YYYY');
    const currentTime = moment().format('LT');
    const days = moment().format('dddd');

    return (

        <div className="text-center my-10" >
            <h1 className="text-3xl" >{name}</h1>
            <div className='flex justify-center items-center gap-x-5'>
                <div>
                    Today
                </div>
                <div>
                    <div className='py-3'>
                        <p className={`${days ? 'text-red-600' : 'text-green-600'}`}>{days}</p>
                        <p>{currentDates}</p>
                        <p>{currentTime}</p>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Title;