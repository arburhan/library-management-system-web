'use client'
import React, { useEffect, useState } from 'react';
import Title from '../shared/title';
import moment from 'moment';
import { Chip } from "@nextui-org/react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const OpeningHour = () => {
    const [offDay, setOffDay] = useState(false);
    const currentDates = moment().format('Do MMMM YYYY');
    const currentTime = moment().format('LT');
    const days = moment().format('dddd');
    useEffect(() => {
        if (days === "Friday" || days === "Saturday") {
            setOffDay(true);
        } else {
            setOffDay(false);
        }
    }, [days]);

    return (
        <section>
            <Title name={"Library Schedule"} />
            <div className='flex justify-center items-center gap-x-5 pb-3'>
                <div>
                    Today
                </div>
                <div className={`pl-2 border-l-4 ${offDay ? 'border-red-600' : 'border-green-600'}`}>
                    <div className='py-3'>
                        <p className={`${offDay ? 'text-red-600' : 'text-green-600'}`}>{days}</p>
                        <p>{currentDates}</p>
                        <p>{currentTime}</p>
                    </div>
                </div>

            </div>
            <div className='text-center'>
                <div>
                    <h3> <span className='text-cyan-500'>Morning Shift:</span> 09:00 AM - 01:30 PM </h3>
                    <div className='py-2'>
                        Status:
                        <span className='pl-3' >
                            <Chip
                                startContent={offDay ? <AiFillCloseCircle /> : <AiFillCheckCircle />}
                                variant="faded"
                                color={`${offDay ? "danger" : "success"}`}>
                                {offDay ? 'Close' : "Open"}
                            </Chip>
                        </span>
                    </div>
                </div>
                <div className='pt-2'>
                    <h3> <span className='text-cyan-500'>Evening Shift:</span> 02:00 PM - 05:00 PM </h3>
                    <div className='py-2'>
                        Status:
                        <span className='pl-3' >
                            <Chip
                                startContent={offDay ? <AiFillCloseCircle /> : <AiFillCheckCircle />}
                                variant="faded"
                                color={`${offDay ? "danger" : "success"}`}>
                                {offDay ? 'Close' : "Open"}
                            </Chip>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpeningHour;