/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import RecentbooksCard from '@/components/home/recentbooks/recentbooksCard';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {

    const { dept, semester } = params;
    const [data, setData] = useState([]);
    const url = process.env.NEXT_PUBLIC_API_URL + `/books`;
    useEffect(() => {
        fetch('http://localhost:3000/api/books')
            .then(response => response.json())
            .then(result => {
                const filteredData = result.books.filter(book => book.deptName == dept);
                setData(filteredData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [dept, semester]);

    return (
        <div>
            Your are {dept} & {semester} semester
            <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 mx-[50px] md:mx-[100px] justify-evenly items-center md:gap-6 my-3">
                {
                    data.map((book) => {
                        return <RecentbooksCard key={book._id} book={book} />
                    })

                }
            </div>
        </div>
    )
};

export default page;