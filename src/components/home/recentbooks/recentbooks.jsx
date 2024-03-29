import React from 'react';
import recentbooks from '@/data/recentbooks.json';
import Title from '../../shared/title';
import RecentbooksCard from './recentbooksCard';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
const Recentbooks = ({ page = false }) => {
    return (
        <section className='my-6'>
            <Title name={"Recently added books"} />
            <div className="grid grid-cols-3 gap-3 md:grid md:grid-cols-4 mx-[50px] md:mx-[100px] justify-evenly items-center md:gap-6 my-3">
                {
                    recentbooks.map(book => <RecentbooksCard key={book._id} book={book} />)
                }
            </div>
            <div className={`text-center ${page == true ? "hidden" : "block"} py-5`}>
                <Link href='/recentbooks' className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-md p-3 rounded-xl">
                    All recent books
                </Link>
            </div>
        </section>

    );
};

export default Recentbooks;