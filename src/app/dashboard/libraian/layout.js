/* eslint-disable react-hooks/rules-of-hooks */

"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineMenu } from 'react-icons/ai';

const layout = ({ children }) => {
    const { data } = useSession();
    // console.log(data?.user?.role);
    if (data?.user?.role !== "librarian") {
        toast.dismiss('you are gone on hell');
        redirect('/dashboard/user');
    }
    const [isOpen, setIsOpen] = useState(false);
    const userMenu = [
        {
            _id: 1,
            name: "Profile",
            url: ""
        },
        {
            _id: 2,
            name: "Add Books",
            url: "addBooks"
        },
        {
            _id: 3,
            name: "Stock ou books",
            url: "stockoutbooks"
        },
        {
            _id: 4,
            name: "All users",
            url: "allusers"
        },
        {
            _id: 5,
            name: "Due Now",
            url: "duebooks"
        },
    ]
    return (
        <section className="flex flex-col px-1 md:flex-row md:basis-1/2 h-screen bg-black">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black text-3xl sm:hidden absolute top-0 right-0 m-6 z-30">
                <AiOutlineMenu />
            </button>
            <div className={`bg-black w-64 absolute sm:relative h-full shadow-lg ${isOpen ? 'left-0' : '-left-64'} sm:left-0 transition-all duration-150 z-30`}>
                <div className="px-6 py-4 flex justify-between items-center bg-blue-500">
                    <h2 className="text-white text-2xl font-semibold">Dashboard</h2>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white sm:hidden">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="mt-6">
                    {
                        userMenu.map(menu => (
                            <li key={menu._id} className=" mx-3 mb-2 rounded-xl cursor-pointer px-6 py-2 hover:bg-[#181a1b] transition-all duration-150 active:scale-[0.98]">
                                <Link href={`/dashboard/libraian/${menu.url}`} > {menu.name} </Link>
                            </li>))
                    }
                </ul>
            </div>
            <div className="m-2 md:ml-8" >
                {
                    children
                }
            </div>
        </section>
    );
};

export default layout;