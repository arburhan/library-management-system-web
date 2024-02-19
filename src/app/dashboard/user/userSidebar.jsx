'use client'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import DataTable from './table';

export default function UserSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const userMenu = [
        "Profile", "Whitelist", "Borrowed", "Due Now"
    ]

    return (
        <div className="flex h-screen bg-black">
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
                            <li key={menu} className=" mx-3 mb-2 rounded-xl cursor-pointer px-6 py-2 hover:bg-[#002d61] transition-all duration-150 active:scale-[0.98]">
                                <Link href="/menu" > {menu} </Link>
                            </li>))
                    }
                </ul>
            </div>
            <div className="w-full bg-gray-300 p-4 pt-16">
                <DataTable />
            </div>
        </div>
    );
}
